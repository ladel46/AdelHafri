import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import workCert from "../images/Work cert.png";
export default function NeoStarter() {
  const [masterLng, setMasterLng] = React.useState(false);
  const [zoomedMaster, setZoomedMaster] = React.useState(false);
  const MasterModules = [
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Git",
    "SASS",
    "API integrations",
    "SEO",
    "Responsive design",
    "Figma",
    "Tailwind CSS",
    "Problem Solving",
  ];
  const MasterSkills = [
    "NEOSTARTER GmbH · Full-time",
    "May 2023 - Present · 1 yr 1 mo",
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
    <div className="relative flex flex-col lg:flex-row w-full items-center justify-center px-10 lg:px-14 mt-[50px] gap-5  text-white">
      <div className="w-[100%]  lg:w-[55%] flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="item  inline-block text-pink-600  w-full  font-extrabold mb-4   bg  font-secondary text-[22px] w-full text-left "
        >
          Frontend Developer at NEOSTARTER
        </motion.h2>
        <motion.div
          variants={{ container }}
          initial="hidden"
          animate="visible"
          className="mt-[0px] flex flex-col w-full list-disc "
        >
          {MasterSkills.map((Skill) => (
            <motion.p
              variants={item}
              className="font-primary text-greenM text-cecnter text-[18px] sm:text-[19px] md:text-[20px] lg:text-[17px] xlg:text-[20px]"
            >
              {Skill}
            </motion.p>
          ))}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="font-primary text-[18px] sm:text-[20px] md:text-[22px] lg:text-[18px] xlg:text-[22px] mt-[10px] w-full text-center text-white "
        >
          Skills gained:
        </motion.h2>
        <motion.div
          variants={{ container }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 mt-[20px] gap-2 flex-wrap   justify-center w-full"
        >
          {MasterModules.map((module, index) => (
            <motion.div
              variants={item}
              key={index}
              className="w-full h-[60px] lg:h-[60px] xlg:h-[30px] py-5 flex flex-row items-center justify-center rounded-[4%]  text-center font-bold bg-greenM text-[12px] lg:text-[15px] font-primary text-blueM"
            >
              {module}
            </motion.div>
          ))}
        </motion.div>
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
            <img
              src={workCert}
              className="fixed z-50 md:w-[100vh] lg:w-[63vw] xlg:w-[50vw] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[5px] border-greenM shadow-lg shadow-greenM"
            />
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
          <img
            src={workCert}
            className="min-w-[320px] sm:min-w-[440px] md:min-w-[550px] lg:min-w-[350px] xlg:w-[500px] border-[5px] border-greenM rounded-[1%] border-[5px] border-greenM shadow-lg shadow-greenM"
          />
        </motion.button>
      </div>
    </div>
  );
}
