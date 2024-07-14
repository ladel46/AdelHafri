import React from "react";
import S1 from "../../images/Suggest1.png";
import S2 from "../../images/Suggest2.png";
import S3 from "../../images/Suggest3.png";
import S4 from "../../images/Suggest4.png";

import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../../Animations/TypingAnimation";
export default function ProjectDetailsSuggest() {
  return (
    <section id="project-details">
      <div className="flex flex-col w-[100vw] lg:w-full items-center  justify-center">
        <h1 className="font-secondary font-bold text-[30px] sm:text-[35px] md:text-[50px] lg:text-[65px] xlg:text-[70px] xl:text-[100px] text-center  text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
          <TypingAnimation
            style={
              "item  inline-block text-transparent W-[100%]   bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Suggest Me A Game"}
          ></TypingAnimation>
        </h1>
        <p className="font-secondary mt-[50px] w-[300px] sm:w-[350px] md:w-[700px] lg:w-[880px] xlg:w-[950px] font-bold text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-center text-greenM">
          <TypingAnimation
            style="item  inline-block text-greenM "
            duration={0.01}
            stagger={0.01}
            delay={0}
            text={
              "A website that suggests a video game to you based on which games you like"
            }
          ></TypingAnimation>
        </p>
        <div className="flex flex-row w-[100%] justify-center space-x-[50px] mt-[50px]">
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
            href="https://ladel46.github.io/Suggest-Me-A-Game/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-greenM rounded-[10%]  py-[10px] w-[110px] text-[20px] font-primary text-blueM font-extrabold hover:bg-pink-600 hover:text-white">
              Visit <i class="fa-solid fa-link"></i>
            </button>
          </motion.a>
          <motion.a
            href="https://github.com/ladel46/Suggest-Me-A-Game"
            target="_blank"
            rel="noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
          >
            <button className="bg-greenM rounded-[10%]  py-[10px] w-[110px] text-[20px] font-primary text-blueM font-extrabold hover:bg-pink-600 hover:text-white">
              GitHub <i class="fa-brands fa-github"></i>
            </button>
          </motion.a>
        </div>

        <div className="flex flex-col xlg:flex-row space-y-[15px] scale-[0.8]  sm:scale-[0.9] xlg:scale-[0.85] xl:scale-[1] xlg:space-y-[0px] xlg:space-x-[15px] xl:space-x-[50px] w-full justify-center items-center lg:mt-[90px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
            className="flex flex-col  xlg:h-[400px] py-[10px] w-[90vw] xlg:w-[400px] rounded-[3%] border-[4px] border-greenM  overflow-y-auto items-center"
          >
            <h2 className="font-secondary font-bold text-transparent text-[30px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
              built with
            </h2>
            <ul className="text-greenM font-primary text-[20px]  w-[100%] font-bold px-[50px] space-y-[15px] mt-[20px] list-disc">
              <li>Semantic HTML5 markup</li>
              <li>CSS custom properties</li>
              <li>Flexbox</li>
              <li>CSS Grid</li>
              <li>Mobile-first workflow</li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-extrabold hover:text-white"
                >
                  React
                </a>{" "}
                - JS library
              </li>
              <li>
                <a
                  href="https://chakra-ui.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-extrabold hover:text-white"
                >
                  ChakraUi
                </a>{" "}
                - Component library
              </li>
              <li>
                <a
                  href="https://chakra-ui.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-extrabold hover:text-white"
                >
                  Rawg Api
                </a>{" "}
                - Games Datebse
              </li>
              <li>
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-pink-600 font-extrabold hover:text-white"
                >
                  FramerMotion
                </a>{" "}
                - Animations
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
            className="flex flex-col  xlg:h-[400px] py-[10px] w-[90vw] xlg:w-[400px] rounded-[3%] border-[4px] border-greenM overflow-y-auto items-center "
          >
            <h2 className="font-secondary font-bold text-transparent text-[24px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
              The challenge
            </h2>
            <ul className="text-greenM font-primary text-[20px]  font-bold w-[100%] px-[50px] space-y-[15px] mt-[20px] list-disc">
              <li>Building a website that is visually appealing</li>
              <li>
                Making sure it's fully responsive and works for all screen
                widths
              </li>
              <li>
                finding and using a third party API that included my needs
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.7 }}
            className="flex flex-col  xlg:h-[400px] py-[10px] w-[90vw] xlg:w-[400px] rounded-[3%] border-[4px] border-greenM overflow-y-auto items-center "
          >
            <h2 className="font-secondary font-bold text-transparent text-[24px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
              Continued development
            </h2>
            <p className="text-greenM font-primary font-bold text-[23px]  w-[100%] px-[30px]  mt-[20px] ">
              In the future works, im aiming to improve my animation skills to
              make my websites more lively and fun, and also aiming to improve
              my code clarity, and optizming performance.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col overflow-y-auto bg-white mx-auto rounded-[1%] border-[5px] border-greenM lg:mt-[100px] h-[500px] w-[90vw] xlg:w-[80%] xl:w-[95%]"
        >
          <img src={S1} alt="" />
          <img src={S2} alt="" />
          <img src={S3} alt="" />
          <img src={S4} alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col  xlg:h-[230px] py-[5px] lg:py-[10px] w-[90vw] xlg:w-[80%] xl:w-[1300px] rounded-[3%] border-[4px] border-greenM overflow-y-auto items-center mt-[30px]"
        >
          <h2 className="font-secondary font-bold text-transparent scale-[0.8] sm:scale-[0.9] lg:scale-[1] text-[24px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
            What was learned
          </h2>
          <p className="text-greenM font-primary font-bold scale-[0.8] sm:scale-[0.9] lg:scale-[1] text-[23px]  w-[100%] text-center lg:text-start lg:px-[30px] -mt-[30px] sm:mt-[0px] lg:mt-[10px] ">
            By doing this project, i improved my skills in using third party
            API's specfically in this case, Rawg Api, which has a large Database
            of videos games with multiple information about each game, also
            imrpoved my skill in creating animation to imrpove my website, and
            lastely learned how to display information to the user in an easy to
            understand manner
          </p>
        </motion.div>
        <div className="flex flex-row w-[100%] justify-center space-x-[50px] mt-[50px]">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            href="https://ladel46.github.io/Suggest-Me-A-Game/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-greenM rounded-[10%]  py-[10px] w-[110px] text-[20px] font-primary text-blueM font-extrabold hover:bg-pink-600 hover:text-white">
              Visit <i class="fa-solid fa-link"></i>
            </button>
          </motion.a>
          <motion.a
            href="https://github.com/ladel46/Suggest-Me-A-Game"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <button className="bg-greenM rounded-[10%]  py-[10px] w-[110px] text-[20px] font-primary text-blueM font-extrabold hover:bg-pink-600 hover:text-white">
              GitHub <i class="fa-brands fa-github"></i>
            </button>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
