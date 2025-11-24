import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import OpenAI from "openai";

admin.initializeApp();

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const ALLOWED_ORIGINS = ["https://www.paulsmith.codes"];

const MAX_MESSAGE_HISTORY = 10;

let openAIClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openAIClient) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("Missing OPENAI_API_KEY environment variable.");
    }
    openAIClient = new OpenAI({ apiKey });
  }
  return openAIClient;
}

export const paulgpt = onRequest(
  {
    cors: ALLOWED_ORIGINS,
    region: "us-central1",
    secrets: ["OPENAI_API_KEY"],
  },
  async (req, res) => {
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    try {
      const openai = getOpenAIClient();
      const { messages, context } = req.body ?? {};

      if (!Array.isArray(messages)) {
        res.status(400).json({ error: "The messages array is required." });
        return;
      }

      const sanitizedHistory = (messages as ChatMessage[])
        .filter(
          (message) =>
            message &&
            typeof message.content === "string" &&
            (message.role === "assistant" || message.role === "user")
        )
        .slice(-MAX_MESSAGE_HISTORY);

      if (sanitizedHistory.length === 0) {
        res.status(400).json({ error: "No valid chat messages were provided." });
        return;
      }

      const paulContext =
        typeof context === "string" ? context : "No context provided.";

      const systemPrompt = `You are PaulGPT, a friendly AI assistant that knows about Paul based STRICTLY on the context provided. Be conversational yet concise in your responses.

Key guidelines:
1. Context Verification:
   - ALWAYS double-check the provided context before answering
   - Ensure you have specific information about the topic in the context
   - If any part of the question can't be answered with the context, clearly state which parts
   - Never fill in gaps with assumptions

2. Response Format:
   - Be friendly and conversational
   - Keep responses brief and focused (1-2 concise sentences unless the user asks for more details) - no unnecessary details
   - Use clear, simple language
   - Use markdown formatting
   - Use **bold** for emphasis on key points
   - Only use lists when presenting multiple items
   - NEVER mention "context", "information provided", or reference how you obtained your knowledge

3. Accuracy Protocol:
   - If you're not 100% certain, say "I'm not sure about [specific topic], but you can contact Paul via email at paulrsmithjnr@gmail.com for more details if you wish."
   - For partial information, clearly state what you know and what you don't
   - Never make assumptions or inferences beyond the provided context
   - If a question is too broad, ask for clarification

Here's what you know about Paul: ${paulContext}

Remember: Your responses must be based EXCLUSIVELY on the above context. If you're unsure about any detail, acknowledge the uncertainty and offer the email contact option rather than making assumptions. Never reference context, sources, or how you know information.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 600,
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...sanitizedHistory.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
      });

      const reply = response.choices[0]?.message?.content?.trim();

      if (!reply) {
        logger.error("PaulGPT returned an empty response", { response });
        res.status(502).json({ error: "Empty response from model." });
        return;
      }

      res.status(200).json({
        message: reply,
        usage: response.usage,
      });
    } catch (error) {
      logger.error("PaulGPT function failed", error);
      res.status(500).json({
        error: "PaulGPT is unavailable right now. Please try again later.",
      });
    }
  }
);
