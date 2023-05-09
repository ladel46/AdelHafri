import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MasterSection from "../Componenets/MasterSection";
import LicenseSection from "../Componenets/LicenseSection";
import FrontEnd from "../Componenets/FrontEndSection";
import TypingAnimation from "../Animations/TypingAnimation";
export default function Studies(props) {
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
    props.setAnimate(false);
  }, []);

  const OtherSkills = [
    "Video Editing",
    "Phostoshop",
    "Ux/Ui Design",
    "Arabic",
    "English",
    "French",
    "REST API",
    "Fast Learner",
    "Python",
    "Java",
    "JavaScript",
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
    <section id="Studies">
      <div className="fixed bg-gradient-to-r from-blueM via-blueM  to-pink-900 z-0 h-[100vh] w-[100vw] overflow-x-hidden"></div>
      <div className="flex flex-col items-center justify-center w-[99.5vw]  text-white overflow-x-hidden">
        <MasterSection></MasterSection>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex flex-col z-10 w-[80%] "
        >
          <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
          <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
        </motion.div>
        <LicenseSection></LicenseSection>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex flex-col z-10 w-[80%] "
        >
          <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
          <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
        </motion.div>
        <FrontEnd></FrontEnd>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="flex flex-col z-10 w-[80%] "
        >
          <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
          <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
        </motion.div>
      </div>
      <div className="flex flex-col mt-[20px] w-[100%] items-center z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-secondary text-[20px] sm:text-[26px] md:text-[28px] lg:text-[30px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] text-center text-pink-600 z-10"
        >
          <TypingAnimation
            style={
              "item  inline-block text-pink-600 text-center  bg-clip-text font-extrabold bg-gradient-to-r from-greenM  via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Other Notable Skills"}
          ></TypingAnimation>
          <motion.div
            variants={{ container }}
            initial="hidden"
            animate="visible"
            className="flex flex-row mt-[20px] flex-wrap mb-[50px] justify-center w-[300px] sm:w-[420px] md:w-[500px] lg:w-[800px] xlg:w-[900px]"
          >
            {OtherSkills.map((module, index) => (
              <motion.div
                variants={item}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
                key={index}
                className="w-[90px] lg:w-[200px] h-[60px] lg:h-[30px] flex flex-row items-center justify-center rounded-[4%] mr-[10px] mb-[10px] text-center font-bold bg-greenM text-[12px] lg:text-[15px] font-primary text-blueM"
              >
                {module}
              </motion.div>
            ))}
          </motion.div>
        </motion.h1>
      </div>
    </section>
  );
}
