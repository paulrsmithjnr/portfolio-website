import LegalPage from "./LegalPage";

const Privacy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="January 20, 2026"
      meta={[
        { label: "Effective date", value: "January 20, 2026" },
        { label: "Developer", value: "Paul Smith" },
        {
          label: "Contact",
          value: <a href="mailto:paulrsmithjnr@gmail.com">paulrsmithjnr@gmail.com</a>,
        },
      ]}
      sections={[
        {
          title: "Summary",
          body:
            "We collect only what we need to run and improve our apps, support you, and process subscriptions. We do not sell your personal information.",
        },
        {
          title: "1. Scope",
          body:
            "This Privacy Policy explains how Paul Smith (\"we\", \"our\", \"us\") collects, uses, and shares information when you use our mobile applications and any related support pages or websites we operate (the \"Services\").",
        },
        {
          title: "2A. Information you provide",
          body:
            "If you contact us (for example by email or a contact form), we receive the information you send, such as your email address, message, and any attachments you include. Some apps may let you create an account. If a specific app does not offer accounts, we do not collect account information for that app.",
          bullets: [
            "Support messages: email address, message, and attachments you submit.",
            "Optional account info, only where a specific app supports accounts.",
          ],
        },
        {
          title: "2B. Content you create in the apps",
          body:
            "Some apps let you create or edit content (for example documents, PDFs, signatures, images, notes, or projects). By default, this content is stored locally on your device unless an app clearly offers cloud sync, backup, or server processing and you choose to enable it.",
          bullets: [
            "Shared or exported content goes to the destination you select.",
            "We do not control how third parties handle content you share through them.",
          ],
        },
        {
          title: "2C. Subscription and purchase information",
          body:
            "If an app offers subscriptions or in-app purchases, purchases are processed by Apple App Store or Google Play (and may be managed through a purchase service provider such as RevenueCat). We receive purchase status information, but not full payment card details.",
          bullets: [
            "Status details include active subscription, product identifiers, and renewal status.",
            "We do not receive or store full payment card information.",
          ],
        },
        {
          title: "2D. Automatically collected information",
          body:
            "We collect limited device, usage, diagnostics, and network information to help run and secure the Services.",
          bullets: [
            "Device and app info: device model, OS version, language, app version, and time zone.",
            "Usage data: basic interaction events such as screens viewed and feature usage.",
            "Diagnostics: crash logs and performance data to detect and fix errors.",
            "Network info: IP address and approximate location inferred from IP.",
          ],
        },
        {
          title: "3. How we use information",
          body: "We use information to:",
          bullets: [
            "Provide, operate, and maintain the Services.",
            "Enable features such as saving projects, exporting files, and restoring purchases.",
            "Process subscriptions and verify premium access (entitlements).",
            "Improve quality and user experience with analytics and troubleshooting.",
            "Communicate about support requests, updates, and important notices.",
            "Protect against fraud, abuse, and security incidents, and comply with legal obligations.",
          ],
        },
        {
          title: "4. How we share information",
          body:
            "We do not sell your personal information. We may share information in limited situations:",
          bullets: [
            "With service providers for analytics, crash reporting, subscription management, hosting, and email support.",
            "With app stores to process purchases and provide purchase status information.",
            "For legal and safety reasons, including compliance and enforcement.",
            "For business transfers such as mergers, acquisitions, or asset sales.",
          ],
        },
        {
          title: "5. Third-party services",
          body:
            "Our apps may use third-party SDKs and platforms such as Google Firebase (analytics and crash reporting), Apple and Google services, and subscription management providers (for example RevenueCat). These services may collect data according to their own policies.",
        },
        {
          title: "6. Data retention",
          body:
            "We keep data only as long as needed for the purposes described in this policy.",
          bullets: [
            "Local app content is stored on your device until you delete it or uninstall the app.",
            "Support records are kept to resolve issues and for recordkeeping.",
            "Analytics and diagnostics are kept for a limited period or aggregated.",
          ],
        },
        {
          title: "7. Your rights and choices",
          body:
            "You have choices around your data and subscriptions.",
          bullets: [
            "Access and deletion: contact us to request deletion where applicable.",
            "Opt-out options: limit tracking and analytics in device settings when available.",
            "Subscriptions: manage or cancel in your Apple App Store or Google Play account settings.",
          ],
        },
        {
          title: "8. Security",
          body:
            "We use reasonable safeguards designed to protect information. No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.",
        },
        {
          title: "9. Children's privacy",
          body:
            "Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us and we will take steps to delete it.",
        },
        {
          title: "10. International transfers",
          body:
            "Your information may be processed in countries where we or our service providers operate. We take steps designed to ensure appropriate protections are in place.",
        },
        {
          title: "11. Changes to this Privacy Policy",
          body:
            "We may update this policy from time to time. We will post the updated policy with a new effective date.",
        },
        {
          title: "12. Contact us",
          body: (
            <>
              Questions or requests:{" "}
              <a href="mailto:paulrsmithjnr@gmail.com">paulrsmithjnr@gmail.com</a>.
            </>
          ),
        },
      ]}
    />
  );
};

export default Privacy;
