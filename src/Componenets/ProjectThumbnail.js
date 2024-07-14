import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";

export default function ProjectThumbnail(props) {
  const [showGif, setShowGif] = React.useState(false);
  const [key, setKey] = React.useState(0);
  return (
    <AnimatePresence>
      <motion.button
        onClick={() => {
          props.setPage(props.Page);
          if (props.width < 980) {
            props.setDrag(-310);
            props.setBlur(false);
            props.setDragged(true);
            props.setRotate(180);
          }
        }}
        onMouseEnter={() => {
          setShowGif(true);
          setKey(2);
        }}
        onMouseLeave={() => {
          setShowGif(false);
          setKey(1);
        }}
        animate={{ scale: 1, height: 130, transition: { duration: 0.4 } }}
        whileHover={
          props.Gif
            ? {
                scale: 1,

                height: 200,
                transition: { duration: 0.4 },
              }
            : null
        }
        className={`flex hover:border-pink-600  flex-col mx-auto w-[250px] xlg:w-full items-center justify-center cursor-pointer  rounded-[0.5rem] overflow-hidden  border-[5px] border-greenM ${props.className}`}
      >
        <div>
          <img
            src={props.img}
            className={`${
              showGif && props.Gif ? "hidden" : null
            }   rounded-[4%]`}
          />
          <img
            src={props.Gif}
            className={`${
              showGif && props.Gif ? null : "hidden"
            }  rounded-[4%]`}
          />
        </div>
      </motion.button>
    </AnimatePresence>
  );
}
