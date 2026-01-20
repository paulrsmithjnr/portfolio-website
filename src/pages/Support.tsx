import LegalPage from "./LegalPage";

const Support = () => {
  const supportEmail = "paulrsmithjnr@gmail.com";

  return (
    <LegalPage
      title="Support"
      sections={[
        {
          body: (
            <>
              If you have any questions or suggestions about our apps, do not
              hesitate to contact us at {" "}
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
            </>
          ),
        },
        {
          title: "Cancel Subscription",
          body:
            "Payments and subscriptions are managed through the App Store and Play Store.",
        },
      ]}
    />
  );
};

export default Support;
