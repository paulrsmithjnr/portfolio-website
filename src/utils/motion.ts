import { Variants } from "framer-motion";

const staggerContainer = (
  staggerChildren?: number, 
  delayChildren?: number
): Variants => {
  return {
    hidden: {
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,  
        delayChildren: delayChildren,      
      },
    },
  };
};

export default staggerContainer;
