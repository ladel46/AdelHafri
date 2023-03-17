import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HomePageSectionText(props) {
  // animation for section text  using framer motion variants
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,

        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {},
    },
  };

  const item = {
    hidden: { y: 500 },
    visible: {
      y: 80,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };
  return (
    // component that handles animating section text when the corresponding home page section is hovered
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={props.word == props.wordPre ? props.key1 : props.key2}
        className={`${
          props.word == props.wordPre && props.hoverEn == true ? null : "hidden"
        } } overflow-hidden flex flex-col w-full   items-center justify-center`}
      >
        <motion.h1
          variants={item}
          className="font-primary text-[50px] text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600"
        >
          {props.title}
        </motion.h1>
        <motion.h2
          variants={item}
          className="font-secondary  text-blueM font-bold text-[15px]"
        >
          {props.description}
        </motion.h2>
        <motion.button
          onClick={() => {
            navigate(props.path);
          }}
          variants={item}
        >
          <h1 className="font-primary mt-[10px] text-[20px] font-bold underline text-gray-600 hover:text-blueM ">
            see more
          </h1>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
