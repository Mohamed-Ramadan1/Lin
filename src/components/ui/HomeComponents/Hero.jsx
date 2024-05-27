import { Link } from "react-router-dom";
import "../../ui/ui.css";
import { store } from "../../../store/store";
// Framer Motion
import { motion } from "framer-motion";

// Images
import imgHero from "../../../assets/image-hero.png";
import starPlur from "../../../assets/plurStar.png";

export const Hero = () => {
  const user = store.getState().userReducers.user;
  return (
    <div className="hero relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
      <div className="container max-w-[1400px] m-auto flex justify-between items-center max-md:flex-col">
        <div className="content relative flex gap-[40px] flex-col justify-end">
          <div className="relative rounded-[10px] max-w-[160px] w-full p-[10px] flex justify-center items-center bg-[#D5FF40] max-sm:hidden">
            <h6 className="relative">Expert Instructors</h6>
            <motion.img
              initial={{ rotate: -260 }}
              animate={{ rotate: 90 }}
              transition={{ repeat: Infinity, type: "spring" }}
              src={starPlur}
              alt=""
              className="absolute right-[-15px] top-[-20px]"
            />
          </div>

          <div className="info flex gap-[15px] flex-col justify-end">
            <div className="flex flex-col justify-end">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl font-bold"
              >
                Free Online Courses
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[55px] font-[500] max-sm:text-[35px] max-sm:mt-[10px]"
              >
                With Certificates
              </motion.h2>
            </div>

            <p className="max-w-[500px]">
              Include a visually appealing image or video background that
              represents your website's theme or the topics covered in your
              courses.
            </p>
          </div>
          {user === null && (
            <div className="max-w-[150px] rounded-[10px] border-[#222] hover:bg-[#222] hover:text-[#fff] transition ease-linear  text-center px-[30px] py-[10px] border-[1px] border-[#2222]">
              <Link to="/signup">join Free</Link>
            </div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="imageHero relative"
        >
          <img src={imgHero} alt="" width="500px" />
        </motion.div>
      </div>
    </div>
  );
};
