import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import FrontEnd from "../images/FrontEnd.jpg";
export default function FrontEndSection() {
  const [zoomedMaster, setZoomedMaster] = React.useState(false);
  const MasterModules = [
    "JavaScript",
    "Version Control",
    "Wroking With GitHub",
    "HTML And CSS In Depth",
    "React",
    "Principles of Ux/Ui Design",
    "Front-End Dev Capstone",
  ];
  const MasterSkills = [
    "Ability of creating responsive websites using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences",
    "Working with ReactJs and mastering it ",
    "Developing colaboration and team skills such as working with GitHub",
  ];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,
        delay: 0.6,
        delayChildren: 0.9,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opcaity: 0 },
    InView: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full items-center justify-center mt-[50px]  text-white">
      <div className="w-[55%] flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-secondary text-[22px] sm:text-[26px] md:text-[28px] lg:text-[25px] xlg:text-[30px] w-[330px] sm:w-[420px] md:w-[700px] lg:w-[400px] xlg:w-[800px] text-center text-transparent "
        >
          <TypingAnimation
            style={
              "item  inline-block text-pink-600 text-center  bg-clip-text font-extrabold bg-gradient-to-r from-greenM  via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Meta Front-End Developer"}
          ></TypingAnimation>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] xlg:text-[22px] mt-[10px] w-[300px] lg:w-[900px] text-center text-white "
        >
          Includes modules such as:
        </motion.h2>
        <motion.div
          variants={{ container }}
          initial="hidden"
          animate="visible"
          className="flex flex-row mt-[20px] flex-wrap  justify-center w-[320px] sm:w-[420px] md:w-[700px] lg:w-[400px] xlg:w-[800px] xl:w-[900px]"
        >
          {MasterModules.map((module, index) => (
            <motion.div
              variants={item}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              key={index}
              className="w-[90px] md:w-[150px] lg:w-[120px] xlg:w-[200px] h-[60px] lg:h-[60px] xlg:h-[30px] flex flex-row items-center justify-center rounded-[4%] mr-[10px] mb-[10px] text-center font-bold bg-greenM text-[12px] lg:text-[15px] font-primary text-blueM"
            >
              {module}
            </motion.div>
          ))}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-primary text-[18px]  sm:text-[20px] md:text-[22px] lg:text-[18px] xlg:text-[22px] mt-[10px] w-[900px] text-center text-white "
        >
          Core skills gained:
        </motion.h2>
        <motion.ul
          initial={{ scaleX: 0.5, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-[20px] flex flex-col w-[320px] sm:w-[350px] md:w-[550px] lg:w-[400px] xlg:w-[700px] list-disc"
        >
          {MasterSkills.map((Skill) => (
            <motion.li className="font-primary text-greenM text-cecnter text-[18px] sm:text-[19px] md:text-[20px] lg:text-[17px] xlg:text-[20px]">
              {Skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="w-[45%] mt-[30px] lg:mt-[0px] flex flex-col items-center z-60">
        {zoomedMaster == true ? (
          <>
            <button
              onClick={() => {
                setZoomedMaster(false);
              }}
              className="fixed w-[100vw] h-[100vh] bg-black opacity-[70%] z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            ></button>
            <img
              src={FrontEnd}
              className="fixed z-50 md:w-[100vh] lg:w-[63vw] xlg:w-[50vw] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[5px] border-greenM shadow-lg shadow-greenM"
            />
          </>
        ) : null}

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            setZoomedMaster(true);
          }}
        >
          <img
            src={FrontEnd}
            className="min-w-[320px] sm:min-w-[440px] md:min-w-[550px] lg:min-w-[350px] xlg:w-[500px] border-[5px] border-greenM rounded-[1%] border-[5px] border-greenM shadow-lg shadow-greenM"
          />
        </motion.button>
      </div>
    </div>
  );
}
