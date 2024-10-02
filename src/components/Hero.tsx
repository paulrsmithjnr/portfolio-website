import StarsCanvas from "./canvas/Stars";
import MagicBorderButton from "./ui/MagicBorderButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Lottie from "react-lottie";
import animationData from "../constants/blob.json";
import { me } from "../assets";
import { SectionWrapper } from "./hoc";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import { useRemoteConfig } from "./RemoteConfigComponent";

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

const SpotlightGroup = () => (
  <>
    <Spotlight
      className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
      fill="white"
    />
    <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
  </>
);

const HeroContent = () => {
  const configValues = useRemoteConfig();
  
  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen">
      <div className="flex items-center lg:justify-start relative my-20 z-10 lg:w-[60%] ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center lg:justify-start">
          <TextGenerateEffect
            className="text-center lg:text-left text-[40px] md:text-4xl lg:text-5xl"
            words={configValues.heading as string}
          />
          <p className="text-center lg:text-left md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl text-white">
            {configValues.subHeading as string}
          </p>

          <div className="w-full justify-center lg:justify-start flex flex-col lg:flex-row gap-6">
            <a href={configValues.resumeUrl as string} target="_blank" rel="noopener noreferrer">
              <MagicBorderButton
                text={configValues.resumeCta as string}
                icon={<FaDownload />}
                position="right"
                fill={true}
              />
            </a>
            <a href="#about">
              <MagicBorderButton
                text={configValues.learnMoreCta as string}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative hidden justify-end items-center lg:flex lg:w-[40%]">
        <Lottie options={defaultLottieOptions} height={640} width={640} />
        <img
          src={me}
          alt={me}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-80"
        />
      </div>
    </div>
  );
};

const Hero = () => (
  <>
    <SpotlightGroup />
    <HeroContent />
    <StarsCanvas />
  </>
);

export default SectionWrapper(Hero, "hero");
