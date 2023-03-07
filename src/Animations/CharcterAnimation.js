import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CharcterAnimation(props) {
  const letters = Array.from(props.text);
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };
  return (
    // the component responsible for animated the different letters on start button words, by deviding the string of words into letters then using framer
    //  motion variants to animate the different letters in sequence
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="container overflow-hidden"
    >
      {letters.map((letter, index) => {
        return (
          <motion.div
            variants={item}
            className="item  inline-block text-transparent bg-clip-text bg-gradient-to-r  from-pink-500 to-purpleD "
            key={index}
          >
            {letter}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
