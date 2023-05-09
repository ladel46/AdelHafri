import React from "react";
import PowerButton from "../images/PowerButton.png";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "../Animations/TextAnimation.js";
import RobotFaceless from "../images/robotto_no_circle_eyeless_mouthless.png";
import RobotHeadless from "../images/robotto_no_citcle_faceless.png";
import RobotHead from "../images/robotto_face.png";

import Mouth from "../images/mouth.png";
import Eyes from "../images/robotto_eyes.png";

export default function StartButton(props) {
  var i = 1;
  // variable of the different start button texts
  const GreetingText = [
    "About Me",
    "Projects",
    "Studies",
    "Conctact me",
    "Home",
  ];
  // variable of the different angles the start button shadow should rotate
  const Angles = [130, 240, 50, -50, 0];
  const EyeX = [-10, 10, -8, 8, 0];
  const faceX = [-3, 3, -3, 3, 0];
  const faceY = [-3, -3, 3, 3, 0];
  const [delay, setDelay] = React.useState(0.6);
  const EyeY = [-6, -6, 3, 3, 0];

  // changing key for rerenders
  const [key, setKey] = React.useState(0);
  const [Shadow, setShadow] = React.useState(false);
  // function that handles the initial start button text swaps and rerenders
  function myLoop1() {
    setTimeout(function () {
      props.setWord(GreetingText[i]);
      setKey(i);
      props.setAngle(Angles[i]);
      props.setEyeY(EyeY[i]);
      props.setEyeX(EyeX[i]);
      props.setFaceX(faceX[i]);
      props.setFaceY(faceY[i]);
      // props.setDelay(0.5);

      i++; //  increment the counter
      if (i < 5) {
        myLoop();
      } else {
        props.setHoverEn(true);
      }
    }, 1600);
  }
  function myLoop() {
    setTimeout(function () {
      setShadow(true);
      myLoop1();
    }, 1000);
  }

  return (
    // div for the start button
    <div
      className={` fixed flex  flex-row justify-center scale-[0.8] lg:scale-[1] items-center z-40 ${
        props.button ? "" : "h-[100vh]"
      } `}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        }}
        whileHover={{
          scale: props.button ? 1 : 1.1,
          transition: { type: "spring", stiffness: 400 },
        }}
        className={`${
          props.button ? "w-[230px] h-[230px]" : "w-[200px] h-[200px]"
        } relative flex flex-col rounded-[100%]  justify-center items-center `}
      >
        <motion.div
          animate={{
            rotate: props.angle,
            scale: props.button ? 3 : 0,
            transition: { duration: 0.4 },
          }}
          className={`${
            Shadow ? " sm:shadow-md" : "shadow-xs sm:shadow-xs"
          }  lg:shadow-pink-600 bg-gradient-to-b from-white to-white  absolute border-pink-600 border-[1px] rounded-full p-[40px]`}
        ></motion.div>
        <AnimatePresence>
          {!props.button ? (
            <motion.button
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.7, transition: { duration: 0.1, delay: 0.5 } }}
              onClick={() => {
                props.setButton(true);
                myLoop();
              }}
              className={` z-10`}
            >
              <img src={PowerButton} alt="" className="z-10" />
            </motion.button>
          ) : null}
        </AnimatePresence>
        {props.button ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center   overflow-hidden absolute shadow-pink-600 bg-gradient-to-b border-[2px] from-grayL via-greenM   border-white  rounded-full h-[240px]  w-[240px]"
          >
            <motion.img
              initial={{ y: 200, opacity: 1 }}
              animate={{ y: 20 }}
              transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
              src={RobotHeadless}
              className=" z-0 w-[150px] absolute"
            ></motion.img>
            <motion.img
              initial={{ y: 200, opacity: 1 }}
              animate={{
                x: props.faceX,
                y: props.faceY,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                  x: { delay: 0.6, type: "spring", stiffness: 70 },
                  y: { delay: 0.6, type: "spring", stiffness: 70 },
                },
              }}
              transition={{ type: "spring", stiffness: 70, delay: 0.6 }}
              src={RobotHead}
              className=" z-10 w-[110px] mb-[60px] absolute"
            ></motion.img>
            {/* <motion.img
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: 1,
                x: props.faceX,
                y: props.faceY,
                transition: {
                  duration: 0.5,
                  delay: 1.7,
                  x: { delay: 0.25, duration: 0.3 },
                  y: { delay: 0.25, duration: 0.3 },
                },
              }}
              transition={{ duration: 0.5, delay: 1.7 }}
              src={Mouth}
              className="absolute z-20 w-[18px] mb-[10px]"
            /> */}
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
          </motion.div>
        ) : // <motion.div
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   transition={{ duration: 0.1, delay: 0.5 }}
        //   className="absolute flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-grayL via-greenM to-greenM overflow-hidden z-10 w-[230px] h-[230px]"
        // >
        //   <img
        //     src="https://marketplace.canva.cn/epo1s/MAFME1epo1s/1/wm_tl-1/canva-seamless-monochrome-vector-geometric-pattern.futuristic-seamless-black-vector-texture-from-simple-abstract-shapes.-MAFME1epo1s.png"
        //     className="absolute z-0 scale-[1.5] opacity-[20%]"
        //   />
        //   <h1 className="font-primary text-blueM  font-bold  text-center  ml-[10px] h-[100px] z-20  text-[39px]">
        //     <AnimatePresence>
        //       <TextAnimation key={key} text={props.word}></TextAnimation>
        //     </AnimatePresence>
        //   </h1>
        // </motion.div>
        null}
        <motion.div
          transition={{ duration: 0.3 }}
          animate={{ scale: props.button ? 1 : 0 }}
          className={`${
            props.button ? null : "hidden"
          } absolute bottom-[10px]  h-[210px] w-[180px] rounded-full`}
        ></motion.div>
      </motion.div>
    </div>
  );
}
