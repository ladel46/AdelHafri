import React from "react";

import Circle1 from "../images/cyanLongBigCircle.png";
import Circle2 from "../images/cyanLongSmallCircle.png";
import Avatar from "../images/Avatar4.png";

import { motion, AnimatePresence } from "framer-motion";

export default function ChatBoxLeftSide(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [version, setVersion] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 1397) {
      setVersion(true);
    } else {
      setVersion(false);
    }
  });

  return (
    <>
      {version ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`scale-[1.15] xlg:scale-[0.8] flex flex-col relative justify-center  items-center w-[100vw]  scale-[0.8]  xlg:-ml-[100px] rounded-[0.5%] mt-[30px]  mx-auto ${props.height} `}
        >
          <img
            src={props.boxSize}
            className="w-[400px] xlg:w-[990px] scale-x-[-1] absolute -left-[60px] xlg:left-[150px] scale-y-[1.4] xlg:scale-y-[1]  top-[0px] w-[1000px]"
          />
          <motion.img
            animate={{
              rotate: 360,
              transition: {
                ease: "linear",
                repeat: Infinity,
                duration: 3,
                repeatDelay: 0,
              },
            }}
            src={Circle1}
            className=" w-[195px]  left-[53px] absolute top-[10px]"
          />
          <motion.img
            animate={{
              rotate: -360,
              transition: {
                ease: "linear",
                repeat: Infinity,
                duration: 2.5,
                repeatDelay: 0,
              },
            }}
            src={Circle2}
            className=" w-[173px] left-[65px] absolute top-[22px]"
          />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center absolute left-[32px] top-[-12px] scale-[0.65] overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-grayL via-greenM   border-white  rounded-full h-[240px]  w-[240px]"
          >
            <motion.img
              initial={{ y: 250, opacity: 1 }}
              animate={{ y: 20 }}
              transition={{ type: "spring", stiffness: 70, delay: 1 }}
              src={Avatar}
              className=" z-0 max-w-[270px]  absolute"
            ></motion.img>
            ={" "}
          </motion.div>
          <motion.h1 className="text-[13px] xlg:text-[37px] font-medium w-[260px] xlg:w-[580px] text-white xlg:text-transparent bg-clip-text bg-gradient-to-r from-greenM via-greenM to-white font-primary absolute top-[25px] xlg:top-[75px] left-[90px] xlg:left-[530px]">
            {props.text}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={props.link}
              className="text-[14px] xlg:text-[20px]  text-white hover:text-pink-600"
            >
              {props.linkWord}{" "}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`scale-[0.9] sm:scale-[1.1]  md:scale-[1.2] lg:scale-[1.3] xlg:scale-[0.8]  flex flex-col relative justify-center  items-center w-[340px]  scale-[0.8] ml-[110px] sm:ml-[140px] md:ml-[170px] lg:ml-[280px] xlg:-ml-[100px] rounded-[0.5%] mt-[30px]  mx-auto ${props.heightMB} `}
        >
          <img
            src={props.boxSizeMobile}
            className="w-[350px] xlg:w-[990px] scale-x-[-1] absolute -left-[80px] xlg:left-[150px]  xlg:scale-y-[1]  top-[0px] w-[1000px]"
          />
          {/* <motion.img
            animate={{
              rotate: 360,
              transition: {
                ease: "linear",
                repeat: Infinity,
                duration: 3,
                repeatDelay: 0,
              },
            }}
            src={Circle1}
            className="w-[64px] xlg:w-[195px] hidden left-[-84px]  absolute top-[5.8px]"
          />
          <motion.img
            animate={{
              rotate: -360,
              transition: {
                ease: "linear",
                repeat: Infinity,
                duration: 2.5,
                repeatDelay: 0,
              },
            }}
            src={Circle2}
            className=" w-[50px] hidden xlg:w-[195px]  left-[-68px]  absolute top-[6px]"
          /> */}
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col  items-center justify-center absolute scale-[0.2] left-[-123px] top-[-36.8px] scale-[0.43] overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-grayL via-greenM   border-greenM  rounded-full h-[140px]  w-[140px]"
          >
            <motion.img
              initial={{ y: 250, opacity: 1 }}
              animate={{ y: 20 }}
              transition={{ type: "spring", stiffness: 70, delay: 1 }}
              src={Avatar}
              className=" z-0 max-w-[150px]  absolute"
            ></motion.img>
            ={" "}
          </motion.div>
          <motion.h1 className="text-[14.3px] xlg:text-[38px] font-medium w-[220px] xlg:w-[580px] text-transparent xlg:text-transparent bg-clip-text bg-gradient-to-r from-greenM via-greenM to-white font-primary absolute top-[22px] xlg:top-[75px] left-[30px] xlg:left-[530px]">
            {props.text}{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={props.link}
              className="text-[11px] xlg:text-[20px]  text-white hover:text-pink-600"
            >
              {props.linkWord}{" "}
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </motion.h1>
        </motion.div>
      )}
    </>
  );
}
