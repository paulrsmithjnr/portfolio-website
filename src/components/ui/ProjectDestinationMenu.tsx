import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { type ProjectDestination } from "../../lib/projectLinks";

interface ProjectDestinationMenuProps {
  isOpen: boolean;
  title: string;
  destinations: ProjectDestination[];
  onClose: () => void;
  onSelect: (url: string) => void;
}

const DESKTOP_BREAKPOINT = "(min-width: 640px)";

const ProjectDestinationMenu = ({
  isOpen,
  title,
  destinations,
  onClose,
  onSelect,
}: ProjectDestinationMenuProps) => {
  const reduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    const updateViewport = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const panelMotion = useMemo(() => {
    if (reduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }

    if (isDesktop) {
      return {
        initial: { opacity: 0, y: 16, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.98 },
      };
    }

    return {
      initial: { opacity: 0, y: 32 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 24 },
    };
  }, [isDesktop, reduceMotion]);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[6000]">
          <motion.button
            type="button"
            aria-label="Close project destination menu"
            className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.12 : 0.18,
              ease: "easeOut",
            }}
            onClick={onClose}
          />

          <div className="absolute inset-0 flex items-end sm:items-center sm:justify-center">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-destination-title"
              className="relative w-full rounded-t-[2rem] border border-white/10 bg-[#050816] p-6 shadow-2xl sm:max-w-md sm:rounded-[2rem]"
              initial={panelMotion.initial}
              animate={panelMotion.animate}
              exit={panelMotion.exit}
              transition={
                reduceMotion
                  ? { duration: 0.12, ease: "easeOut" }
                  : {
                      type: isDesktop ? "spring" : "tween",
                      duration: isDesktop ? 0.26 : 0.24,
                      bounce: isDesktop ? 0.14 : 0,
                      ease: isDesktop ? undefined : [0.22, 1, 0.36, 1],
                    }
              }
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors duration-300 hover:border-purple hover:text-purple"
                onClick={onClose}
                aria-label="Close project destination menu"
              >
                <IoClose size={18} />
              </button>

              <div className="pr-10">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-purple">
                  Open project
                </div>
                <h2
                  id="project-destination-title"
                  className="mt-3 text-2xl font-bold text-white"
                >
                  {title}
                </h2>
                <p className="mt-2 text-sm text-white-100">
                  Choose where to open this project.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {destinations.map((destination, index) => (
                  <motion.button
                    key={`${title}-${destination.label}`}
                    type="button"
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-white transition-colors duration-300 hover:border-purple hover:bg-white/[0.08]"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                    transition={{
                      duration: reduceMotion ? 0.1 : 0.2,
                      delay: reduceMotion ? 0 : 0.04 * index,
                      ease: "easeOut",
                    }}
                    onClick={() => onSelect(destination.url)}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {destination.label}
                    </span>
                    <FiArrowUpRight size={18} className="text-purple" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default ProjectDestinationMenu;
