import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharcterAnimation from "../Animations/CharcterAnimation";

export default function TextAnimation(props) {
  const words = props.text.split(" ");
  console.log(words);
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        delayChildren: 0.6,
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const item = {
    hidden: { x: 150, opcaity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };
  return (
    // the component responsible for animated the different words on start button sentences, by deviding the string of text into words then using framer
    //  motion variants to animate the different words in sequence
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=" flex flex-col  justify-center h-full items-center  overflow-hidden"
    >
      {words.map((word, index) => {
        return (
          <motion.div
            variants={item}
            className="item mr-[10px] text-transparent bg-clip-text bg-gradient-to-r from-blueM to-pink-600 "
            key={index}
          >
            <CharcterAnimation text={word}></CharcterAnimation>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
