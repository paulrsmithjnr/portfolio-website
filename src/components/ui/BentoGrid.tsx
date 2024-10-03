"use client";

import { cn } from "../../lib/utils";
import { useState } from "react";
import animationData from "../../constants/confetti.json";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GlobeComponent from "./GlobeComponent";
import Lottie from "react-lottie";
import MagicBorderButton from "./MagicBorderButton";
import { IoCopyOutline } from "react-icons/io5";
import StarsCanvas from "../canvas/Stars";
import ComputerCanvas from "../canvas/Computer";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { useRemoteConfig } from "../RemoteConfigComponent";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  text,
  textClassName,
  img,
  imgClassName,
  secondImg,
}: {
  id: string;
  className?: string;
  text?: string;
  textClassName?: string;
  img?: string;
  imgClassName?: string;
  secondImg?: string;
}) => {
  const configValues = useRemoteConfig();

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(configValues.emailAddress as string);
    setCopied(true);
  };

  let background: string = id === "one" ? "rgb(6, 8, 22)" : "rgb(4,7,29)";
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: background,
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${
          id === "six" && "flex justify-center"
        } h-full transition duration-200`}
      >
        <div className={`w-full h-full absolute`}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {secondImg && (
          <div
            className={`absolute right-0 ${id !== "one" && "-bottom-5"} ${
              id === "five" && "w-full opacity-80"
            } `}
          >
            <img
              src={secondImg}
              alt={secondImg}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}
        {id === "six" && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-xl text-center md:text-xl lg:text-3xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            textClassName,
            `relative md:h-full min-h-40 text-white-100 flex flex-col z-20 ${
              (id !== "one" && id !== "six") && "px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200"
            }`
          )}
        >
          <div
            className={`font-sans text-lg lg:text-xl max-w-96 font-bold z-20`}
          >
            {id !== "two" && text}
            {id === "two" && (
              <div>
                <Typewriter
                  words={text!.split(";")}
                  loop={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
                <Cursor cursorStyle="|" cursorColor="#CBACF9" />
              </div>
            )}
          </div>

          {id === "one" && (
            <div className="w-full h-full">
              <ComputerCanvas />
            </div>
          )}

          {id === "four" && (
            <div>
              <StarsCanvas />
              <GlobeComponent />
            </div>
          )}

          {id === "six" && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicBorderButton
                text={
                  copied
                    ? (configValues.collabCtaCopied as string)
                    : (configValues.collabCta as string)
                }
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
