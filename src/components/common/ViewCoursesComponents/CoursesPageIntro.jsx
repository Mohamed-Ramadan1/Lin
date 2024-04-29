// Framer Motion
import { motion } from "framer-motion";

const CoursesPageIntro = () => {
  return (
    <div className="title flex flex-col items-start gap-[15px]">
      <div className="info">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.4 }}
          className="text-4xl font-bold text-[#222] max-md:text-3xl"
        >
          Descover Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", delay: 0.5 }}
          className="text-[20px] mt-[10px] text-[#8d8d8d] font-bold"
        >
          Courses to get you started
        </motion.p>
      </div>
      <p className="text-base text-[#8d8d8d]">
        Encompass a diverse range of educational offerings designed to provide
        individuals with foundational knowledge and skills applicable across
        various disciplines. These courses cover fundamental topics that form
        the basis of many fields of study, offering a broad understanding of key
        concepts and principles. Whether exploring humanities, sciences, or
        professional development, general courses provide a versatile framework
        for personal growth and academic exploration.
      </p>
    </div>
  );
};

export default CoursesPageIntro;
