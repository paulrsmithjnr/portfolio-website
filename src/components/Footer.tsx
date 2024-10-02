import { FaLocationArrow } from "react-icons/fa6";

import MagicBorderButton from "./ui/MagicBorderButton";
import { socials } from "../constants";
import SectionHeader from "./SectionHeader";
import { footerGrid } from "../assets";
import { SectionWrapper } from "./hoc";
import { useRemoteConfig } from "./RemoteConfigComponent";

const Footer = () => {
  const configValues = useRemoteConfig();

  return (
    <footer className="relative pt-20 pb-10">
      <FooterBg />
      <div className="flex flex-col items-center">
        <SectionHeader text={configValues.footerSectionHeading as string} highlightCount={5} />
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {configValues.footerSectionSubHeading as string}
        </p>
        <a
          className="mt-10"
          href={`mailto:${configValues.emailAddress as string}`}
        >
          <MagicBorderButton
            text={configValues.footerSectionCta as string}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="flex flex-row flex-wrap items-center mt-5 md:gap-3 gap-6">
          {socials.map((socialMedia) => (
            <a
              key={socialMedia.id}
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={socialMedia.img}
                alt={socialMedia.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
        <p className="md:text-base mt-16 text-center text-sm md:font-normal text-white-100">
          &copy; {new Date().getFullYear()} {configValues.copyrightText as string}
        </p>
      </div>
    </footer>
  );
};

const FooterBg = () => {
  return (
    <div className="w-full absolute left-0 -bottom-72 min-h-96">
      <img src={footerGrid} alt="grid" className="w-full h-full opacity-80 " />
    </div>
  );
};

export default SectionWrapper(Footer, "contact");
