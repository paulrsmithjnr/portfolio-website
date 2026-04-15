import LegalPage from "./LegalPage";

const Terms = () => {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="April 14, 2026"
      meta={[
        { label: "Effective date", value: "April 14, 2026" },
        { label: "Developer", value: "Paul Smith" },
        {
          label: "Contact",
          value: <a href="mailto:paulrsmithjnr@gmail.com">paulrsmithjnr@gmail.com</a>,
        },
        { label: "Governing law", value: "New Jersey, United States" },
      ]}
      sections={[
        {
          title: "Important",
          body:
            "By downloading, accessing, or using the Services, you agree to these Terms and our Privacy Policy.",
        },
        {
          title: "1. Definitions",
          body:
            "Key terms used throughout these Terms:",
          bullets: [
            "\"Services\" means our mobile applications, related features, and any support pages or websites we operate.",
            "\"You\" means the person using the Services.",
          ],
        },
        {
          title: "2. Acceptance of Terms",
          body:
            "If you do not agree to these Terms, do not use the Services.",
        },
        {
          title: "3. Eligibility",
          body:
            "You must be at least 13 years old to use the Services. If you are under the age of majority where you live, you must have permission from a parent or guardian. You must be legally able to make purchases to buy subscriptions or in-app purchases.",
        },
        {
          title: "4. License and permitted use",
          body:
            "We grant you a limited, non-exclusive, non-transferable, revocable license to use the Services for personal, non-commercial purposes, subject to these Terms and applicable store rules.",
        },
        {
          title: "5. Prohibited activities",
          body: "You agree not to:",
          bullets: [
            "Misuse the Services, attempt unauthorized access, or interfere with normal operation.",
            "Reverse engineer, decompile, or attempt to extract source code except where allowed by law.",
            "Use the Services in a way that violates any laws or third-party rights.",
          ],
        },
        {
          title: "6. Your content",
          body:
            "If the Services allow you to create, import, or edit content (for example documents, PDFs, images, or signatures), you retain ownership of your content.",
          bullets: [
            "Some apps may offer optional cloud sync or server-side processing. If you choose to use those features, you grant us a limited license to host, process, and transmit your content only as needed to provide those features.",
            "You are responsible for your content, including making backups. If content is stored locally, uninstalling an app may delete it from your device.",
          ],
        },
        {
          title: "7. Subscriptions and in-app purchases",
          body:
            "Some apps may offer subscriptions or in-app purchases. Purchases are processed by Apple App Store or Google Play, and billing is governed by the applicable store terms.",
          bullets: [
            "Auto-renewal: subscriptions renew automatically unless canceled before the end of the current billing period.",
            "Manage or cancel: you can manage subscriptions in your App Store or Google Play account settings.",
            "Trials: if a free trial is offered, it converts to a paid subscription unless canceled before the trial ends.",
            "Refunds: refund requests are handled by Apple or Google under their policies. We cannot issue refunds for purchases processed by the stores.",
          ],
        },
        {
          title: "8. Third-party services",
          body:
            "The Services may integrate third-party tools (for example analytics, crash reporting, subscription management, web views, or system share sheets). Your use of third-party services may be subject to their terms and policies.",
        },
        {
          title: "9. Intellectual property",
          body:
            "The Services, including designs, logos, and software, are owned by Paul Smith or licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works except as permitted by law.",
        },
        {
          title: "10. Disclaimers",
          body:
            "The Services are provided \"as is\" and \"as available\" without warranties of any kind, to the maximum extent permitted by law. We do not guarantee that the Services will be uninterrupted or error-free.",
        },
        {
          title: "11. Limitation of liability",
          body:
            "To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or revenue, arising from your use of the Services.",
        },
        {
          title: "12. Termination",
          body:
            "We may suspend or terminate access to the Services if you violate these Terms or if required for security or legal reasons. You may stop using the Services at any time.",
        },
        {
          title: "13. Changes to these Terms",
          body:
            "We may update these Terms from time to time. Updated terms will be posted with a new effective date. Continued use after changes means you accept the updated Terms.",
        },
        {
          title: "14. Governing law",
          body:
            "These Terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of laws principles.",
        },
        {
          title: "15. Contact",
          body: (
            <>
              Questions about these Terms:{" "}
              <a href="mailto:paulrsmithjnr@gmail.com">paulrsmithjnr@gmail.com</a>.
            </>
          ),
        },
      ]}
    />
  );
};

export default Terms;
