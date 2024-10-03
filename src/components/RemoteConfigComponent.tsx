import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { fetchAndActivate, getValue, Value } from "firebase/remote-config";
import { remoteConfig } from "../firebaseConfig";
import Preloader from "./ui/Preloader/Preloader";

interface RemoteConfigValues {
  [key: string]: string | number | boolean | object | null;
}

const defaultConfigValues: RemoteConfigValues = {
  heading: "",
  subHeading: "",
  resumeCta: "",
  resumeUrl: "",
  learnMoreCta: "",
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
  six: "",
  emailAddress: "",
  collabCta: "",
  collabCtaCopied: "",
  experienceSectionHeading: "",
  technologiesSectionHeading: "",
  projectsSectionHeading: "",
  projectOne: "",
  checkSiteButtonText: "",
  footerSectionHeading: "",
  footerSectionSubHeading: "",
  footerSectionCta: "",
  copyrightText: "",
};

const configKeys = Object.keys(defaultConfigValues) as Array<
  keyof RemoteConfigValues
>;

const RemoteConfigContext =
  createContext<RemoteConfigValues>(defaultConfigValues);

export const useRemoteConfig = () => useContext(RemoteConfigContext);

interface RemoteConfigComponentProps {
  children: ReactNode;
}

const RemoteConfigComponent: React.FC<RemoteConfigComponentProps> = ({
  children,
}) => {
  const [configValues, setConfigValues] =
    useState<RemoteConfigValues>(defaultConfigValues);
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const fetchConfig = async () => {
      await fetchAndActivate(remoteConfig);

      const values: RemoteConfigValues = { ...defaultConfigValues };

      configKeys.forEach((key) => {
        const stringKey = key as string;
        const value: Value = getValue(remoteConfig, stringKey);

        try {
          const strValue = value.asString();
          try {
            values[key] = JSON.parse(strValue);
          } catch {
            values[key] = strValue;
          }
        } catch {
          try {
            values[key] = value.asNumber();
          } catch {
            try {
              values[key] = value.asBoolean();
            } catch {
              values[key] = null;
            }
          }
        }
      });

      setConfigValues(values);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchConfig();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <RemoteConfigContext.Provider value={configValues}>
      {children}
    </RemoteConfigContext.Provider>
  );
};

export default RemoteConfigComponent;
