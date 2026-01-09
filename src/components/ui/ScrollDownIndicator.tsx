import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ScrollDownIndicatorProps {
  href?: string;
  label?: string;
  className?: string;
}

const ScrollDownIndicator = ({
  href = "#about",
  label = "Scroll down",
  className,
}: ScrollDownIndicatorProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2",
        className
      )}
    >
      <motion.a
        href={href}
        className="inline-flex text-white/70 transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black-100"
        aria-label={label}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.a>
    </div>
  );
};

export default ScrollDownIndicator;
