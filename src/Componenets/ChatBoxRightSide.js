import React from "react";
import Robot from "../images/Robot2.png";
import BoxSm from "../images/2lines boxu.png";
import BoxMd from "../images/3lines boxu.png";
import BoxLg from "../images/5lines boxu.png";
import BoxXl from "../images/7lines boxu.png";
import Circle1 from "../images/pinkuLongBigCircle.png";
import Circle2 from "../images/pinkuLongSmallCircle.png";
import RobotFaceless from "../images/robotto_no_circle_eyeless_mouthless.png";
import RobotHeadless from "../images/robotto_no_citcle_faceless.png";
import RobotHead from "../images/robotto_face.png";
import Mouth from "../images/mouth.png";
import Eyes from "../images/robotto_eyes.png";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBoxRightSide(props) {
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
          transition={{ duration: 0.5 }}
          className={` flex flex-col relative justify-center  items-center w-[100vw]  scale-[0.8] -mr-[100px] rounded-[0.5%] mt-[30px]  mx-auto ${props.height} `}
        >
          <img
            src={props.boxSize}
            className=" absolute right-[150px] top-[0px] w-[1000px]"
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
            className=" w-[195px] right-[53px] absolute top-[10px]"
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
            className=" w-[173px] right-[65px] absolute top-[21px]"
          />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center absolute right-[32px] top-[-12px] scale-[0.65] overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-white via-pink-600   border-white  rounded-full h-[240px]  w-[240px]"
          >
            <motion.img
              initial={{ y: 250, opacity: 1 }}
              animate={{ y: 20 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
              src={RobotFaceless}
              className=" z-0 w-[150px] absolute"
            ></motion.img>
            <motion.img
              initial={{ y: 200, opacity: 1 }}
              animate={{
                transition: {
                  duration: 0.5,
                  delay: 3.2,
                },
              }}
              transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
              src={RobotHead}
              className=" z-10 w-[110px] mb-[60px] absolute"
            ></motion.img>
            <motion.img
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1],
                x: props.eyeX,
                y: props.eyeY,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                  x: { delay: 0.6, type: "spring", stiffness: 70 },
                  y: { delay: 0.6, type: "spring", stiffness: 70 },
                  scaleY: { repeat: Infinity, duration: 0.2, repeatDelay: 4 },
                },
              }}
              transition={{ duration: 0.5, delay: 1.7 }}
              src={Eyes}
              className="absolute z-20 w-[50px] mb-[57px]"
            />
            <motion.img
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                },
              }}
              transition={{ duration: 0.5, delay: 1.7 }}
              src={Mouth}
              className="absolute z-20 w-[20px] mb-[3px]"
            />
          </motion.div>
          <motion.h1 className="text-[37px] font-medium w-[580px] text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-500 to-pink-500 font-primary absolute top-[80px] right-[500px]">
            {props.text}
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`scale-[0.9] sm:scale-[1.1] md:scale-[1.2] lg:scale-[1.3] xlg:scale-[0.8]  flex flex-col relative justify-center  items-center w-full  scale-[0.8] right-[80px] sm:right-[130px] md:right-[200px] lg:right-[350px] xlg:-ml-[100px] rounded-[0.5%] mt-[30px]  mx-auto ${props.heightMB} `}
        >
          <img
            src={props.boxSizeMobile}
            className="w-[350px] scale-x-[1] absolute -right-[80px]   xlg:scale-y-[1]  top-[1px] "
          />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col  items-center justify-center absolute scale-[0.2] right-[-122px] top-[-35px] scale-[0.43] overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-white via-pink-600   border-pink-900     rounded-full h-[140px]  w-[140px]"
          >
            <motion.img
              initial={{ y: 250, opacity: 1 }}
              animate={{ y: 20 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
              src={RobotFaceless}
              className=" z-0 max-w-[100px] absolute"
            ></motion.img>
            <motion.img
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: [0, 1],
                x: props.eyeX,
                y: props.eyeY,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                  x: { delay: 0.6, type: "spring", stiffness: 70 },
                  y: { delay: 0.6, type: "spring", stiffness: 70 },
                  scaleY: { repeat: Infinity, duration: 0.2, repeatDelay: 4 },
                },
              }}
              transition={{ duration: 0.5, delay: 1.7 }}
              src={Eyes}
              className="absolute z-20 max-w-[37px] mt-[20px] mb-[52px]"
            />
            <motion.img
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                },
              }}
              transition={{ duration: 0.5, delay: 1.7 }}
              src={Mouth}
              className="absolute z-20 max-w-[15px] mt-[6px] "
            />
          </motion.div>
          <motion.h1 className="text-[14.3px] xlg:text-[38px] font-medium w-[225px] xlg:w-[580px] text-transparent xlg:text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-500 to-pink-500 font-primary absolute top-[28px] xlg:top-[75px] right-[20px] xlg:left-[530px]">
            {props.text}{" "}
          </motion.h1>
        </motion.div>

        // <motion.div
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 0.5 }}
        //   className={` scale-[0.95] xlg:scale-[0.8] flex flex-col relative justify-center  items-center w-[100vw]  scale-[0.8] mr-[-40px]  rounded-[0.5%] mt-[30px]   ${props.heightMB}`}
        // >
        //   <img
        //     src={props.boxSizeMobile}
        //     className="w-[350px] xlg:w-[990px]  absolute  xlg:left-[150px]  xlg:scale-y-[1]  top-[0px] w-[1000px]"
        //   />
        //   <motion.div
        //     animate={{ opacity: 1 }}
        //     transition={{ delay: 0.5 }}
        //     className="flex flex-col items-center  justify-center absolute right-[-21px] top-[-36px] scale-[0.426] overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-white via-pink-600   border-pink-900  rounded-full h-[140px]  w-[140px]"
        //   >
        //     <motion.img
        //       initial={{ y: 250, opacity: 1 }}
        //       animate={{ y: 20 }}
        //       transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
        //       src={RobotFaceless}
        //       className=" z-0 max-w-[100px] absolute"
        //     ></motion.img>
        //     <motion.img
        //       initial={{ y: 200, opacity: 1 }}
        //       animate={{
        //         transition: {
        //           duration: 0.5,
        //           delay: 3.2,
        //         },
        //       }}
        //       transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
        //       src={RobotHead}
        //       className=" z-10 max-w-[0px] mb-[60px] absolute"
        //     ></motion.img>
        //     <motion.img
        //       initial={{ scaleY: 0 }}
        //       animate={{
        //         scaleY: [0, 1],
        //         x: props.eyeX,
        //         y: props.eyeY,
        //         transition: {
        //           duration: 0.5,
        //           delay: 1.7,
        //           x: { delay: 0.6, type: "spring", stiffness: 70 },
        //           y: { delay: 0.6, type: "spring", stiffness: 70 },
        //           scaleY: { repeat: Infinity, duration: 0.2, repeatDelay: 4 },
        //         },
        //       }}
        //       transition={{ duration: 0.5, delay: 1.7 }}
        //       src={Eyes}
        //       className="absolute z-20 max-w-[37px] mt-[20px] mb-[52px]"
        //     />
        //     <motion.img
        //       initial={{ scaleY: 0 }}
        //       animate={{
        //         scaleY: 1,
        //         transition: {
        //           duration: 0.5,
        //           delay: 1.7,
        //         },
        //       }}
        //       transition={{ duration: 0.5, delay: 1.7 }}
        //       src={Mouth}
        //       className="absolute z-20 max-w-[15px] mt-[6px] "
        //     />
        //   </motion.div>
        //   <motion.h1 className="text-[14.3px] font-medium w-[220px] text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-500 to-pink-500 font-primary absolute top-[30px] right-[120px]">
        //     {props.text}
        //   </motion.h1>
        // </motion.div>
      )}
    </>
  );
}
