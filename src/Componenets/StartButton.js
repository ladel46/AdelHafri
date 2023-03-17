import React from "react";
import PowerButton from "../images/PowerButton.png";
import { motion, AnimatePresence } from "framer-motion";
import TextAnimation from "../Animations/TextAnimation.js";
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
  // changing key for rerenders
  const [key, setKey] = React.useState(0);
  // function that handles the initial start button text swaps and rerenders
  function myLoop() {
    setTimeout(function () {
      props.setWord(GreetingText[i]);
      setKey(i);
      props.setAngle(Angles[i]);
      i++; //  increment the counter
      if (i < 5) {
        myLoop();
      } else {
        props.setHoverEn(true);
      }
    }, 2000);
  }
  return (
    // div for the start button
    <div className="fixed flex  flex-row justify-center  items-center z-40 h-[100vh]">
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
          className="shadow-lg  shadow-pink-600 bg-gradient-to-b from-black to-white  absolute border-pink-600 border-[2px] rounded-full p-[40px]"
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
            transition={{ duration: 0.1, delay: 0.5 }}
            className="absolute flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-grayL via-greenM to-greenM overflow-hidden z-10 w-[230px] h-[230px]"
          >
            <img
              src="https://marketplace.canva.cn/epo1s/MAFME1epo1s/1/wm_tl-1/canva-seamless-monochrome-vector-geometric-pattern.futuristic-seamless-black-vector-texture-from-simple-abstract-shapes.-MAFME1epo1s.png"
              className="absolute z-0 scale-[1.5] opacity-[20%]"
            />
            <h1 className="font-primary text-blueM  font-bold  text-center  ml-[10px] h-[100px] z-20  text-[39px]">
              <AnimatePresence>
                <TextAnimation key={key} text={props.word}></TextAnimation>
              </AnimatePresence>
            </h1>
          </motion.div>
        ) : null}
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
