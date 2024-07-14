import React from "react";
import Myfundus from "../../images/MyFundus.png";
import Myfundus2 from "../../images/Myunfud2.png";

import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../../Animations/TypingAnimation";
export default function MyFundus() {
  const technologies = [
    "HTML",
    "CSS",
    "javascript",
    "React",
    "Next.js",
    "Typescript",
    "Tailwind",
    "SCSS",
    "Axios",
    "Next auth",
  ];

  return (
    <section id="project-details">
      <div className="flex flex-col w-[100vw] lg:w-full items-center  justify-center gap-10 px-5 overflow-hidden">
        <div className="flex flex-col gap-4">
          <h1 className="font-secondary  text-[30px] sm:text-[35px] md:text-[50px] lg:text-[65px] xlg:text-[70px] xl:text-[100px] text-center  text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
            <TypingAnimation
              style={
                "item  inline-block text-transparent W-[100%]   bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-400 to-pink-900 "
              }
              duration={0.1}
              stagger={0.1}
              delay={0.1}
              text={"MyFundus"}
            ></TypingAnimation>
          </h1>
          <p className="font-secondary  w-[300px] sm:w-[350px] md:w-[700px] lg:w-[880px] xlg:w-[950px] font-bold text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] text-center text-greenM">
            <TypingAnimation
              style="item  inline-block text-greenM "
              duration={0.01}
              stagger={0.01}
              delay={0}
              text={
                "An Ecommerce platform focused on rentals utilizing the latest technologies and trends in the industry"
              }
            ></TypingAnimation>
          </p>
          <div className="flex flex-row w-[100%] justify-center space-x-[50px] ">
            <motion.a
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
              href="https:/myfundus.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-greenM rounded-[10%]  py-[10px] w-[110px] text-[20px] font-primary text-blueM font-extrabold hover:bg-pink-600 hover:text-white">
                Visit <i class="fa-solid fa-link"></i>
              </button>
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
          className="flex flex-col   py-[10px]  xlg:w-full rounded-[0.5rem] border-[4px] border-greenM  overflow-y-auto items-center "
        >
          <h2 className="font-secondary font-bold text-transparent text-[30px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
            built with
          </h2>
          <div className="text-greenM font-primary flex-wrap text-[20px] justify-center w-[100%] font-bold px-[20px] py-5 list-disc flex flex-row gap-3 text-center ">
            {technologies.map((tech, index) => (
              <div
                className="w-[10rem] py-1 bg-greenM text-white rounded-[0.5rem]"
                key={index}
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 2 }}
          className="flex flex-col overflow-y-auto bg-white mx-auto rounded-[0.5rem] border-[5px] border-greenM  h-[500px] w-full "
        >
          <img src={Myfundus} alt="" />
          <img src={Myfundus2} alt="" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
          className="flex flex-col   py-[10px]  w-full rounded-[0.5rem] border-[4px] border-greenM overflow-y-auto items-center "
        >
          <h2 className="font-secondary font-bold text-transparent text-[24px] bg-clip-text  bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
            The challenge
          </h2>
          <ul className="text-greenM font-primary text-[20px]  font-bold w-[100%] px-[50px] space-y-[15px] mt-[20px] list-disc">
            <li>
              Building a website that is simple for the user yet visually
              appealing
            </li>
            <li>
              Making sure to make the flow of renting and buying as simple as
              possible while covering all the possible needs of the user
            </li>
            <li>Making sure the user data is safe and secure</li>
            <li>Making sure its runs and looks the same on all devices</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
