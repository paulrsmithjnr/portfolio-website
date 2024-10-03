import { motion } from "framer-motion";
import staggerContainer from "../../utils/motion";

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  const HOC: React.FC<P> = (props) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full"
      >
        <div className="max-w-7xl w-full">
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>

          <Component {...props} />
        </div>
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
