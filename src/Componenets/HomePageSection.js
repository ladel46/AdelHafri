import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePageSectionText from "./HomePageSectionText";
import AboutMeImage from "../images/AboutMeImage.JPG";
import ProjectsImage from "../images/ProjectsImage.JPG";
import StudiesImage from "../images/StudiesImage.JPG";
import ContactImage from "../images/ContactImage.JPG";

// animation for diffrent home page sections using framer motion variants
export default function HomePageSection(props) {
  const container = {
    hidden: { opacity: props.animate ? 0 : 1, scale: props.animate ? 0 : 1 },
    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.5,
        delay: 1,
        delayChildren: 1,
        staggerChildren: 0.9,
      },
    },
  };

  const item = {
    hidden: { scale: props.animate ? 0 : 1, opcaity: props.animate ? 0 : 1 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    whileHover: { scale: 1.1 },
  };

  return (
    <section id="HomePageSections">
      {/* renders if the button has being pressed */}
      {props.button ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`
           flex  flex-col relative  w-[100vw] h-[100vh] justify-center sm:justify-around items-center overflow-hidden space-y-[40px] sm:space-y-[0px]`}
        >
          {/* Div for 1/4 home page sections */}
          <div className=" flex relative flex-row w-[100vw]  transform h-[43vh] -mt-[30px] sm:-mt-[20px]  justify-around z-0 ">
            <motion.div
              // Rotates circle shadow + set the word displayed on circle when hovered
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("About me");
                  props.setAngle(130);
                  props.setEyeX(-10);
                  props.setEyeY(-6);
                  props.setFaceX(-3);
                  props.setFaceY(-3);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col relative  bg-gradient-to-b  p-[1px] from-blueM to-pink-600   bg-grayL h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw]  justify-center rounded-[3%] items-center"
                  : "flex flex-col bg-gradient-to-b  p-[1px] from-transparent to-transparent  h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw] justify-center rounded-[3%] items-center"
              }`}
            >
              <motion.div
                variants={item}
                className="shadow-lg shadow-pink-600 overflow-y-hidden sm:shadow-xl relative  sm:shadow-pink-600 flex bg-gradient-to-b from-blueM via-greenM to-pink-600 border-[2px] h-[46vh] md:h-[42vh] z-10 border-white w-[46vw] md:w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  // placeholder bg image that will be changed after all pages have being made
                  src={AboutMeImage}
                  alt=""
                  className={`bg absolute object-cover w-full h-full  opacity-[7%] `}
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
                  raise={-20}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Projects");
                  props.setAngle(-130);
                  props.setEyeX(10);
                  props.setEyeY(-6);
                  props.setFaceX(3);
                  props.setFaceY(-3);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw] justify-center rounded-[3%] items-center"
                  : "flex flex-col bg-gradient-to-b  p-[1px] from-transparent to-transparent  h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw]  justify-center rounded-[3%] items-center"
              }`}
            >
              <motion.div
                variants={item}
                className="shadow-lg shadow-pink-600  sm:shadow-xl relative  sm:shadow-pink-600 flex bg-gradient-to-b from-blueM via-greenM to-pink-600 border-[2px] h-[46vh] md:h-[42vh] z-10 border-white w-[46vw] md:w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src={ProjectsImage}
                  alt=""
                  className={`bg absolute object-cover w-full h-full  opacity-[7%] `}
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"PROJECTS"}
                  description={"checkout my projects"}
                  word={props.word}
                  wordPre={"Projects"}
                  path={"/Projects"}
                  key1={"s21"}
                  key2={"s22"}
                  hoverEn={props.hoverEn}
                  raise={-20}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-row relative w-[100vw] h-[43vh]  justify-around ">
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Achievements");
                  props.setAngle(50);
                  props.setEyeX(-8);
                  props.setEyeY(3);
                  props.setFaceX(-3);
                  props.setFaceY(3);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw] justify-center rounded-[3%] items-center"
                  : "flex flex-col bg-gradient-to-b  p-[1px] from-transparent to-transparent  h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw]  justify-center rounded-[3%] items-center"
              }`}
            >
              <motion.div
                variants={item}
                className="shadow-lg shadow-pink-600  sm:shadow-xl relative  sm:shadow-pink-600 flex bg-gradient-to-b from-blueM via-greenM to-pink-600 border-[2px] h-[46vh] md:h-[42vh] z-10 border-white w-[46vw] md:w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src={StudiesImage}
                  alt=""
                  className={`bg absolute object-cover w-full h-full  opacity-[7%] `}
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"ACHIEVEMENTS"}
                  description={"find out the different achievements i earned"}
                  word={props.word}
                  wordPre={"Achievements"}
                  path={"/Achievements"}
                  key1={"s31"}
                  key2={"s32"}
                  hoverEn={props.hoverEn}
                  raise={40}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
            <motion.div
              onMouseEnter={() => {
                if (props.hoverEn == true) {
                  props.setWord("Contact me");
                  props.setAngle(-50);
                  props.setEyeX(8);
                  props.setEyeY(3);
                  props.setFaceX(3);
                  props.setFaceY(3);
                }
              }}
              whileHover={{ scale: 1.05 }}
              className={`${
                props.hoverEn
                  ? "flex flex-col bg-gradient-to-b  p-[1px] from-blueM to-pink-600 h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw] justify-center rounded-[3%] items-center"
                  : "flex flex-col bg-gradient-to-b  p-[1px] from-transparent to-transparent  h-[46vh] md:h-[43.3vh] w-[46vw] md:w-[47.3vw]  justify-center rounded-[3%] items-center"
              }`}
            >
              <motion.div
                variants={item}
                className="shadow-lg shadow-pink-600  sm:shadow-xl relative  sm:shadow-pink-600 flex bg-gradient-to-b from-blueM via-greenM to-pink-600 border-[2px] h-[46vh] md:h-[42vh] z-10 border-white w-[46vw] md:w-[46.8vw] rounded-[3%]"
              >
                <motion.img
                  src={ContactImage}
                  alt=""
                  className={`bg absolute object-cover w-full h-full  opacity-[7%] `}
                  whileHover={{ opacity: 0.3 }}
                />
                <HomePageSectionText
                  title={"CONCTACT ME"}
                  description={"get in touch with me for any needs you have"}
                  word={props.word}
                  wordPre={"Contact me"}
                  path={"/ContactMe"}
                  key1={"s41"}
                  key2={"s42"}
                  hoverEn={props.hoverEn}
                  raise={40}
                ></HomePageSectionText>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}
