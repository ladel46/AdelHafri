import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePageSectionText from "./HomePageSectionText";
// animation for diffrent home page sections using framer motion variants
const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1,
      delay: 0.35,
      delayChildren: 1,
      staggerChildren: 1.8,
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
  whileHover: { scale: 1.1 },
};
export default function HomePageSection(props) {
  return (
    <section id="HomePageSections">
      {/* renders if the button has being pressed */}
      {props.button ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`
           flex  flex-col relative  w-[100vw] h-[100vh] justify-around items-center space-y-[0px]`}
        >
          {/* Div for 1/4 home page sections */}
          <div className=" flex relative flex-row w-[100vw]  transform h-[43vh] -mt-[20px] justify-around z-0 ">
            <motion.div
              // Rotates circle shadow + set the word displayed on circle when hovered
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("About me");
                  props.setAngle(130);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col relative  bg-gradient-to-b  p-[1px] from-blueM to-pink-600 bg-grayL h-[43.3vh] w-[47.3vw] justify-center rounded-[3%] items-center"
                  : null
              }`}
            >
              <motion.div
                variants={item}
                className=" shadow-xl relative  shadow-pink-600 flex bg-gradient-to-b from-transparent to-greenM border-[2px] h-[42vh] z-10 border-white w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  // placeholder bg image that will be changed after all pages have being made
                  src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/09/Project-section-on-Brittany-Chiang-portfolio-website.png"
                  alt=""
                  className={`bg absolute opacity-[10%] `}
                  whileHover={{ opacity: 0.3 }}
                />
                {/* component for animated text that appears when hovering the section */}
                <HomePageSectionText
                  title={"ABOUT ME"}
                  description={"get to know more about me"}
                  word={props.word}
                  wordPre={"About me"}
                  key1={"s11"}
                  key2={"s12"}
                  path={"/AboutMe"}
                  setHeaderKey={props.setHeaderKey}
                  hoverEn={props.hoverEn}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Projects");
                  props.setAngle(-130);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 bg-grayL h-[43.3vh] w-[47.3vw] justify-center rounded-[3%] items-center"
                  : null
              }`}
            >
              <motion.div
                variants={item}
                className="  shadow-xl relative  shadow-pink-600 flex bg-gradient-to-b from-transparent to-greenM border-[2px] h-[42vh] z-10 border-white w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/09/Project-section-on-Brittany-Chiang-portfolio-website.png"
                  alt=""
                  className="bg absolute opacity-[20%] "
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"PROJECTS"}
                  description={"checkout my projects"}
                  word={props.word}
                  wordPre={"Projects"}
                  key1={"s21"}
                  key2={"s22"}
                  hoverEn={props.hoverEn}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-row relative w-[100vw] h-[43vh]  justify-around ">
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Studies");
                  props.setAngle(50);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 bg-grayL h-[43.3vh] w-[47.3vw] justify-center rounded-[3%] items-center"
                  : null
              }`}
            >
              <motion.div
                variants={item}
                className=" shadow-xl relative  z-20 shadow-pink-600 flex bg-gradient-to-b from-transparent to-greenM border-[2px] h-[42vh] z-10 border-white w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/09/Project-section-on-Brittany-Chiang-portfolio-website.png"
                  alt=""
                  className="bg absolute opacity-[10%] "
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"STUDIES"}
                  description={"find out the certificates i earned"}
                  word={props.word}
                  wordPre={"Studies"}
                  key1={"s31"}
                  key2={"s32"}
                  hoverEn={props.hoverEn}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Contact me");
                  props.setAngle(-50);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 bg-grayL h-[43.3vh] w-[47.3vw] justify-center rounded-[3%] items-center"
                  : null
              }`}
            >
              <motion.div
                variants={item}
                className=" shadow-xl relative  shadow-pink-600 flex bg-gradient-to-b from-transparent to-greenM border-[2px] h-[42vh] z-10 border-white w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/09/Project-section-on-Brittany-Chiang-portfolio-website.png"
                  alt=""
                  className="bg absolute opacity-[10%] "
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"CONCTACT ME"}
                  description={"get in touch with me for any needs you have"}
                  word={props.word}
                  wordPre={"Contact me"}
                  key1={"s41"}
                  key2={"s42"}
                  hoverEn={props.hoverEn}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
