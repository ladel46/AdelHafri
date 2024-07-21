import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "../Animations/TypingAnimation";
import NeoStarter from "../Componenets/neoStarter";
import workCert from "../images/Work cert.png";
import StudiesSection from "../Componenets/studies-section";
import MasterFr from "../images/MasterFr.jpg";
import MasterAr from "../images/MasterAr.jpg";
import LicenseAr from "../images/LicenseAr.jpg";
import LicenseFr from "../images/LicenseFr.jpg";
import FrontEnd from "../images/FrontEnd.jpg";

export default function Achievements(props) {
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
    props.setAnimate(false);
  }, []);

  const OtherSkills = [
    "Video Editing",
    "Phostoshop",
    "Ux/Ui Design",
    "Arabic",
    "English",
    "French",
    "REST API",
    "Fast Learner",
    "Python",
    "Java",
    "JavaScript",
  ];
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,
        delay: 0.6,
        delayChildren: 0.9,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { scale: 0, opcaity: 0 },
    InView: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const neoStarter = {
    header: "Frontend Developer at NEOSTARTER",
    sections: [
      {
        type: "text",
        items: [
          "NEOSTARTER GmbH · Full-time",
          "May 2023 - Present · 1 yr 1 mo",
          "Deep understanding of computers innerworkings",
        ],
      },
      {
        type: "tiles",
        title: "Core skills gained:",
        items: [
          "Next.js",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Git",
          "SASS",
          "API integrations",
          "SEO",
          "Responsive design",
          "Figma",
          "Tailwind CSS",
          "Problem Solving",
        ],
      },
    ],
    certficateInt: workCert,
  };

  const master = {
    header: "Master's in Computer Engineering",
    sections: [
      {
        type: "text",
        title: "Core skills gained:",
        items: [
          "Experience with majority of widely used programming langauges",
          "Adaptibility to new programming languages in an effecient and short time",
          "Deep understanding of computers innerworkings",
        ],
      },
      {
        type: "tiles",
        title: "Includes modules such as:",
        items: [
          "Advanced Programming",
          "Advanced Digital Systems",
          "Advanced Mathematics",
          "Advanced IC's",
          "DSP",
          "Embeded Systems",
          "Computer Networks",
          "Digital Signal Processing",
          "Programming Languages",
          "Operating Systems",
        ],
      },
    ],
    certficateInt: MasterFr,
    certficateAr: MasterAr,
  };
  const license = {
    header: "License in Electrical Engineering",
    sections: [
      {
        type: "text",
        title: "Core skills gained:",
        items: [
          "basic to deep knowledge in multiple technical modules",
          "Developed problem anayalsis and solving  skills",
          "Practical Experience through a substantial number of laboratory sessions",
        ],
      },
      {
        type: "tiles",
        title: "Includes modules such as:",
        items: [
          "Electrical Engineering I, II",
          "Active Devices I, II",
          "Mathematics I, II, III",
          "Physics I, II, III",
          "English I, II",
          "Digital Systems I, II",
          "Electro Magnetic Theory",
          "Electrical Machines",
          "Computer Architecture",
          "Commuincation Principles",
          "Microprocessor Design",
          "Linear Systems I, II",
        ],
      },
    ],
    certficateInt: LicenseFr,
    certficateAr: LicenseAr,
  };

  const metaFront = {
    header: "Meta Front-End Developer",
    sections: [
      {
        type: "text",
        title: "Core skills gained:",
        items: [
          "Ability of creating responsive websites using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences",
          "Working with ReactJs and mastering it ",
          "Developing colaboration and team skills such as working with GitHub",
        ],
      },
      {
        type: "tiles",
        title: "Includes modules such as:",
        items: [
          "JavaScript",
          "Version Control",
          "Wroking With GitHub",
          "HTML And CSS In Depth",
          "React",
          "Principles of Ux/Ui Design",
          "Front-End Dev Capstone",
        ],
      },
    ],
    certficateInt: FrontEnd,
  };

  const Achievements = [neoStarter, master, license, metaFront];

  return (
    <section id="Achievements">
      <div className="fixed bg-gradient-to-r from-blueM via-blueM  to-pink-900 z-0 h-[100vh] w-[100vw] overflow-x-hidden"></div>

      <div className="flex flex-col items-center justify-center w-[99.5vw]  text-white overflow-x-hidden py-2">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-secondary text-[20px] sm:text-[26px] md:text-[28px] lg:text-[30px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] text-center text-pink-600 z-10"
        >
          <TypingAnimation
            style={
              "item  inline-block text-pink-600 text-center  bg-clip-text font-extrabold bg-gradient-to-r from-greenM  via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Achievements"}
          />
        </motion.h1>
        {Achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full py-2"
          >
            <StudiesSection {...item}></StudiesSection>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col z-10 w-[80%] "
            >
              <div className="h-[2px] w-[100%] bg-greenM mt-[40px]"></div>
              <div className="h-[2px] w-[100%] bg-greenM mt-[3px]"></div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-[20px] w-[100%] items-center z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-secondary text-[20px] sm:text-[26px] md:text-[28px] lg:text-[30px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] text-center text-pink-600 z-10"
        >
          <TypingAnimation
            style={
              "item  inline-block text-pink-600 text-center  bg-clip-text font-extrabold bg-gradient-to-r from-greenM  via-pink-400 to-pink-900 "
            }
            duration={0.1}
            stagger={0.1}
            delay={0.1}
            text={"Other Notable Skills"}
          ></TypingAnimation>
          <motion.div
            variants={{ container }}
            initial="hidden"
            animate="visible"
            className="flex flex-row mt-[20px] flex-wrap mb-[50px] justify-center w-[300px] sm:w-[420px] md:w-[500px] lg:w-[800px] xlg:w-[900px]"
          >
            {OtherSkills.map((module, index) => (
              <motion.div
                variants={item}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
                key={index}
                className="w-[90px] lg:w-[200px] h-[60px] lg:h-[30px] flex flex-row items-center justify-center rounded-[4%] mr-[10px] mb-[10px] text-center font-bold bg-greenM text-[12px] lg:text-[15px] font-primary text-blueM"
              >
                {module}
              </motion.div>
            ))}
          </motion.div>
        </motion.h1>
      </div>
    </section>
  );
}
