import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Briefcase, FolderOpen, Mail, User, Wrench } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavItem } from "../../constants";

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

const normalizeSectionId = (link: string) =>
  link.startsWith("#") ? link.slice(1) : link;

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const iconMap = useMemo(
    () => ({
      about: User,
      experience: Briefcase,
      technologies: Wrench,
      projects: FolderOpen,
      contact: Mail,
    }),
    []
  );

  const itemsWithIcons = useMemo(
    () =>
      navItems.map((item) => {
        const sectionId = normalizeSectionId(item.link);
        const iconKey = sectionId || item.id || item.name.toLowerCase();
        return {
          ...item,
          sectionId,
          IconComponent: iconMap[iconKey as keyof typeof iconMap],
        };
      }),
    [iconMap, navItems]
  );

  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(
    itemsWithIcons[0]?.sectionId ?? ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible(scrollY > 100);

      let matchedSection: string | null = null;
      const offset = windowHeight * 0.45;

      itemsWithIcons.forEach((item) => {
        const anchor = document.getElementById(item.sectionId);
        const section = anchor?.closest("section") ?? anchor;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          matchedSection = item.sectionId;
        }
      });

      if (matchedSection) {
        setActiveSection((prev) =>
          matchedSection && matchedSection !== prev ? matchedSection : prev
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemsWithIcons]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(normalizeSectionId(href));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-8 left-0 right-0 z-[5000] flex justify-center"
        >
          <motion.div
            className={cn(
              "relative px-3 md:px-4 py-2 rounded-full backdrop-blur-md border border-white/10",
              className
            )}
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 3, 25, 0.92) 0%, rgba(10, 12, 30, 0.94) 55%, rgba(18, 12, 40, 0.92) 100%)",
              boxShadow:
                "0 10px 30px rgba(11, 12, 30, 0.45), 0 4px 12px rgba(11, 12, 30, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-purple/20 pointer-events-none" />

            <div className="relative z-10 flex items-center space-x-0">
              {itemsWithIcons.map((item, index) => {
                const isActive = activeSection === item.sectionId;
                const IconComponent = item.IconComponent;
                const icon =
                  item.icon ??
                  (IconComponent ? (
                    <IconComponent size={14} className="flex-shrink-0" />
                  ) : null);

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.link)}
                    className={cn(
                      "relative px-2 md:px-3 py-1.5 text-[0.65rem] md:text-xs font-semibold transition-colors duration-300",
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={item.name}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple/80 to-darkPurple/80"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-1.5">
                      {icon}
                      <span className="hidden md:inline-block tracking-wide">
                        {item.name}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
