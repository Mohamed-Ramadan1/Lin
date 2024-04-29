// Framer Motion
import { motion } from "framer-motion";

// Icon
import { BusinessIcon } from "../../icons/BusinessIcon";

const CategoryItem = ({
  initial,
  whileInView,
  transition,
  headerText,
  contentText,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className="box flex flex-col items-start gap-[15px] max-sm:w-full"
    >
      <BusinessIcon />

      <div className="content flex flex-col items-start gap-[10px]">
        <h2 className="text-2xl text-[#fff] font-bold">{headerText}</h2>
        <p className="text-base text-[#777] font-[200] max-w-[300px] max-sm:w-full h-[100px] overflow-hidden ">
          {contentText}
        </p>
      </div>
    </motion.div>
  );
};

export default CategoryItem;
