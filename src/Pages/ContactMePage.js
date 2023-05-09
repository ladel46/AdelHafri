import React from "react";
import Robot from "../images/Robot2.png";
import ChatBox from "../images/ChatBox.png";
import { motion, AnimatePresence } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import Form from "../Componenets/Form";

export default function ContactMePage(props) {
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
    props.setAnimate(false);
  }, []);
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section id="ContactMe">
      <div className="flex flex-col w-full mx-auto h-[100%]   bg-gradient-to-r from-blueM via-blueM items-center to-pink-900">
        <h1 className="font-secondary font-bold text-[50px] sm:text-[60px] md:text-[70px] lg:text-[100px] mt-[30px] text-center  text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-100 to-pink-400">
          <TypingAnimation
            style={
              "item  inline-block text-transparent W-[100%]   bg-clip-text font-extrabold bg-gradient-to-r from-greenM via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"CONTACT ME"}
          ></TypingAnimation>
        </h1>
        <p className="font-secondary mt-[50px] font-bold w-[353px] md:w-[710px]  lg:w-[850px] xlg:w-[1200px] text-[14.9px] lg:text-[17.8px] xlg:text-[21px] text-center text-greenM">
          <TypingAnimation
            style="item  inline-block text-greenM "
            duration={0.01}
            stagger={0.01}
            delay={0}
            text={
              "questions or comments? need a website design or implementation ? have a role at your company i'm fit  for ? then don't hesitate and contact me by filling the   form bellow"
            }
          ></TypingAnimation>
        </p>
        <div className="flex flex-row mx-auto container items-start mt-[50px] justify-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex flex-col w-[75%] "
          >
            <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
            <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
          </motion.div>
          <motion.a
            initial={{ rotate: 360, scale: 0 }}
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            animate={{ rotate: 0, scale: 1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="px-[50px] text-[50px] text-greenM hover:text-pink-600"
            href="https://github.com/ladel46"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-github"></i>
            </button>
          </motion.a>
          <motion.a
            initial={{ rotate: 360, scale: 0 }}
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            animate={{ rotate: 0, scale: 1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="px-[10px] text-[50px] text-greenM hover:text-pink-600"
            href="https://www.linkedin.com/in/adel-hafri/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </motion.a>
          <motion.a
            initial={{ rotate: 360, scale: 0 }}
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            animate={{ rotate: 0, scale: 1, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="px-[50px] text-[50px] text-greenM hover:text-pink-600"
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/676771637"
          >
            <button>
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </motion.a>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex flex-col w-[75%] "
          >
            <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
            <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
          </motion.div>{" "}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
        >
          <Form></Form>
        </motion.div>
      </div>
    </section>
  );
}
