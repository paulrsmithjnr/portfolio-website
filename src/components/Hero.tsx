import StarsCanvas from "./canvas/Stars";
import { Spotlight } from "./ui/Spotlight";
import Lottie from "react-lottie";
import animationData from "../constants/blob.json";
import { me } from "../assets";
import { SectionWrapper } from "./hoc";
import { socials } from "../constants";
import { Tilt } from "react-tilt";

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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Profile and Info Section */}
      <div className="flex items-center gap-2 mb-4">
        {/* Profile Image with Lottie */}
        <div className="relative w-[150px] h-[150px]">
          <Lottie
            options={defaultLottieOptions}
            height={200}
            width={200}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            src={me}
            alt={me}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-[120px] w-[120px]"
          />
        </div>

        {/* Name and Location */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-white mb-1">Paul Smith</h1>
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/jm.svg"
              alt="Jamaica Flag"
              className="w-5"
            />
            <span className="text-gray-300 text-xs">Based in Jamaica</span>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[80px] leading-none font-bold text-white tracking-tighter mb-4 text-center">
        <span className="text-purple">FULLSTACK</span>
        <br />
        SOFTWARE ENGINEER
      </h2>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {socials.map((social) => (
          <Tilt key={social.id} className="relative">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 relative group overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
              <img
                src={social.img}
                alt={social.name}
                className="w-6 h-6 relative z-10"
              />
            </a>
          </Tilt>
        ))}
        <Tilt className="relative">
          <a
            href="./Paul Smith.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-all duration-300 relative group overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
            <svg
              className="w-6 h-6 text-white group-hover:text-white transition-colors relative z-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20M12 18V13M9 15L12 18L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Tilt>
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
