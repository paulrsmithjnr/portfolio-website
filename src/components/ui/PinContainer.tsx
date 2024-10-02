"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const handleHover = (isHovered: boolean) => {
    setTransform(
      `translate(-50%,-50%) rotateX(${isHovered ? 40 : 0}deg) scale(${
        isHovered ? 0.8 : 1
      })`
    );
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0)",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-[0.09375rem] mt-4"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition-transform duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  const circles = [0, 2, 4];

  return (
    <motion.div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition-opacity duration-500">
      <div className="w-full h-full -mt-7 relative">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-xs font-bold text-white">
              {title}
            </span>
            <span className="absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-[0.09375rem] mt-4"
        >
          {circles.map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 bottom-1/2 translate-x-[1.5px] bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 translate-x-[0.5px] bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full" />
        </>
      </div>
    </motion.div>
  );
};
