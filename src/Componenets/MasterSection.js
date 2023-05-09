import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import MasterFr from "../images/MasterFr.jpg";
import MasterAr from "../images/MasterAr.jpg";
export default function MasterSection() {
  const [masterLng, setMasterLng] = React.useState(false);
  const [zoomedMaster, setZoomedMaster] = React.useState(false);
  const MasterModules = [
    "Advanced Programming",
    "Advanced Digital Systems",
    "Advanced Mathematics",
    "Advanced IC's",
    "DSP",
    "Embeded Systems",
    "Computer Networks",
    "Digital Signal Processing",
    "Programming Languages",
    "Operating Systems",
  ];
  const MasterSkills = [
    "Experience with majority of widely used programming langauges",
    "Adaptibility to new programming languages in an effecient and short time",
    "Deep understanding of computers innerworkings",
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,
        delay: 0.6,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opcaity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="relative flex flex-col lg:flex-row w-full items-center justify-center mt-[50px]  text-white">
      <div className="w-[55%] flex flex-col items-center">
        <h1 className="font-secondary text-[22px] sm:text-[26px] md:text-[28px] lg:text-[25px] xlg:text-[30px] w-[330px] sm:w-[420px] md:w-[700px] lg:w-[400px] xlg:w-[800px] text-center text-transparent ">
          <TypingAnimation
            style={
              "item  inline-block text-pink-600 text-center  bg-clip-text font-extrabold bg-gradient-to-r from-greenM  via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Master's in Computer Engineering"}
          ></TypingAnimation>
        </h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
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
              key={index}
              className="w-[90px] md:w-[150px] lg:w-[120px] xlg:w-[200px] h-[60px] lg:h-[60px] xlg:h-[30px] flex flex-row items-center justify-center rounded-[4%] mr-[10px] mb-[10px] text-center font-bold bg-greenM text-[12px] lg:text-[15px] font-primary text-blueM"
            >
              {module}
            </motion.div>
          ))}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="font-primary text-[18px]  sm:text-[20px] md:text-[22px] lg:text-[18px] xlg:text-[22px] mt-[10px] w-[900px] text-center text-white "
        >
          Core skills gained:
        </motion.h2>
        <motion.ul
          variants={{ container }}
          initial="hidden"
          animate="visible"
          className="mt-[20px] flex flex-col w-[320px] sm:w-[350px] md:w-[550px] lg:w-[400px] xlg:w-[700px] list-disc"
        >
          {MasterSkills.map((Skill) => (
            <motion.li
              variants={item}
              className="font-primary text-greenM text-cecnter text-[18px] sm:text-[19px] md:text-[20px] lg:text-[17px] xlg:text-[20px]"
            >
              {Skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="w-[45%] mt-[30px] lg:mt-[0px] flex flex-col items-center ">
        {zoomedMaster == true ? (
          <>
            <button
              onClick={() => {
                setZoomedMaster(false);
              }}
              className="fixed w-[100vw] h-[100vh] bg-black opacity-[70%] z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            ></button>
            {masterLng == true ? (
              <img
                src={MasterFr}
                className="fixed z-50 md:w-[100vh] lg:w-[63vw] xlg:w-[50vw] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[5px] border-greenM shadow-lg shadow-greenM"
              />
            ) : (
              <img
                src={MasterAr}
                className="fixed z-50  md:w-[100vh] lg:w-[63vw] xlg:w-[50vw] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[5px] border-greenM shadow-lg shadow-greenM"
              />
            )}
            <div className="fixed left-1/2 -translate-x-1/2 z-40 bottom-[80px] sm:bottom-[10px]  xlg:bottom-[80px] flex flex-row justify-center">
              <button
                onClick={() => {
                  setMasterLng(false);
                }}
              >
                <h3 className="font-primary mr-[5px] text-[30px] font-bold hover:text-pink-600 text-greenM">
                  French
                </h3>
              </button>
              <h3 className="font-primary text-[30px] font-bold  text-greenM">
                /
              </h3>
              <button
                onClick={() => {
                  setMasterLng(true);
                }}
              >
                {" "}
                <h3 className="font-primary text-[30px] font-bold hover:text-pink-600 ml-[5px] text-greenM">
                  Arabic
                </h3>
              </button>
            </div>
          </>
        ) : null}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => {
            setZoomedMaster(true);
          }}
        >
          {masterLng == true ? (
            <img
              src={MasterFr}
              className="min-w-[320px] sm:min-w-[440px] md:min-w-[550px] lg:min-w-[350px] xlg:w-[500px] border-[5px] border-greenM rounded-[1%] border-[5px] border-greenM shadow-lg shadow-greenM"
            />
          ) : (
            <img
              src={MasterAr}
              className="min-w-[320px] sm:min-w-[440px] md:min-w-[550px] lg:min-w-[350px] xlg:w-[500px] lg:w-[500px] border-[5px] border-greenM rounded-[1%] border-[5px] border-greenM shadow-lg shadow-greenM"
            />
          )}
        </motion.button>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="flex flex-row justify-center mt-[10px]"
        >
          <button
            onClick={() => {
              setMasterLng(false);
            }}
          >
            <h3 className="font-primary mr-[5px] text-[22px] sm:text-[32px] lg:text-[25px] xlg:text-[30px] font-bold hover:text-pink-600 text-greenM">
              French
            </h3>
          </button>
          <h3 className="font-primary text-[22px] sm:text-[32px] lg:text-[25px] xlg:text-[30px] font-bold  text-greenM">
            /
          </h3>
          <button
            onClick={() => {
              setMasterLng(true);
            }}
          >
            {" "}
            <h3 className="font-primary text-[22px] sm:text-[32px] lg:text-[25px] xlg:text-[30px] font-bold hover:text-pink-600 ml-[5px] text-greenM">
              Arabic
            </h3>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
