import React from "react";
import BoxSm from "../images/2lines boxu.png";
import BoxMd from "../images/3lines boxu.png";
import BoxLg from "../images/5lines boxu.png";
import BoxXl from "../images/7lines boxu.png";
import BoxXXXl from "../images/cyanLong15.png";
import BoxXXXlMb from "../images/cyanShort15.png";

import BoxC2L from "../images/ChatBoxes/cyanLong2.png";
import BoxC3L from "../images/ChatBoxes/cyanLong3.png";
import BoxC5L from "../images/ChatBoxes/cyanLong5.png";
import BoxC7L from "../images/ChatBoxes/cyanLong7.png";
import BoxC9L from "../images/ChatBoxes/cyanLong9.png";
import BoxC11L from "../images/ChatBoxes/cyanLong11.png";
import BoxC13L from "../images/ChatBoxes/cyanLong13.png";
import BoxC15L from "../images/ChatBoxes/cyanLong15.png";
import BoxC17L from "../images/ChatBoxes/cyanLong17.png";
import BoxC19L from "../images/ChatBoxes/cyanLong19.png";
import BoxC2LMB from "../images/ChatBoxes/cyanShort2.png";
import BoxC3LMB from "../images/ChatBoxes/cyanShort3.png";
import BoxC5LMB from "../images/ChatBoxes/cyanShort5.png";
import BoxC7LMB from "../images/ChatBoxes/cyanShort7.png";
import BoxC9LMB from "../images/ChatBoxes/cyanShort9.png";
import BoxC11LMB from "../images/ChatBoxes/cyanShort11.png";
import BoxC13LMB from "../images/ChatBoxes/cyanShort13.png";
import BoxC15LMB from "../images/ChatBoxes/cyanShort15.png";
import BoxC17LMB from "../images/ChatBoxes/cyanShort17.png";
import BoxC19LMB from "../images/ChatBoxes/cyanShort19.png";
import BoxP2L from "../images/ChatBoxes/pinkuLong2.png";
import BoxP2LMB from "../images/ChatBoxes/pinkuShort2.png";
import BoxP3LMB from "../images/ChatBoxes/pinkuShort3.png";

import { motion, AnimatePresence } from "framer-motion";
import ChatBoxRightSide from "../Componenets/ChatBoxRightSide";
import ChatBoxLeftSide from "../Componenets/ChatBoxLeftSide";

export default function AboutMePage(props) {
  const [chatHistory, setChatHistory] = React.useState([]);
  const [inputText, setInputText] = React.useState("|");
  const myRef = React.useRef(null);
  const [display1, setDisplay1] = React.useState(true);
  const [display2, setDisplay2] = React.useState(true);
  const [display3, setDisplay3] = React.useState(true);
  const [display4, setDisplay4] = React.useState(true);
  const [color, setColor] = React.useState("text-gray-500");
  const [clicked, setClicked] = React.useState(false);
  const [text1, setText1] = React.useState();
  const [text2, setText2] = React.useState();
  const [boxSize1, setBoxSize1] = React.useState();
  const [boxSize2, setBoxSize2] = React.useState();
  const [boxSize1Mb, setBoxSize1Mb] = React.useState();
  const [boxSize2Mb, setBoxSize2Mb] = React.useState();

  const [length1, setLength1] = React.useState();
  const [length2, setLength2] = React.useState();
  const [length1MB, setLength1MB] = React.useState();
  const [length2MB, setLength2MB] = React.useState();
  const [buttonClicked, setButtonClicked] = React.useState();
  const [linkWord, setLinkWord] = React.useState("");
  const [link, setLink] = React.useState("google.com");

  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
    props.setAnimate(false);
  }, []);
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onClick = (
    text1,
    text2,
    boxSize1,
    boxSize2,
    length1,
    length2,
    linkWord,
    link
  ) => {
    setChatHistory(
      chatHistory.concat(
        <>
          <ChatBoxRightSide
            boxSize={boxSize1}
            boxSizeMobile={boxSize1Mb}
            text={text1}
            height={length1}
            heightMB={length1MB}
          ></ChatBoxRightSide>
          <ChatBoxLeftSide
            boxSize={boxSize2}
            boxSizeMobile={boxSize2Mb}
            text={text2}
            height={length2}
            heightMB={length2MB}
            linkWord={linkWord}
            link={link}
          ></ChatBoxLeftSide>
        </>
      )
    );
  };
  React.useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    // Section for the About me Page
    <section id="AboutMe">
      <div className="fixed bg-gradient-to-r from-blueM via-blueM  to-pink-900 z-0 h-[100vh] w-[100vw] "></div>
      <div className="flex flex-col  items-center  z-10 overflow-x-hidden w-[99vw]">
        {/* Div for each ChatBox segment */}
        {chatHistory}
        <div
          ref={myRef}
          className=" text-[50px] mt-[150px] xlg:mt-[300px] text-white "
        ></div>
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className="fixed bottom-[0px] border-t-[2px] border-pink-600 h-[190px] xlg:h-[150px] flex flex-col  w-[100vw]    items-center"
        ></motion.div>
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className="fixed bottom-[0px]  border-pink-600 h-[190px] xlg:h-[150px] flex flex-col  w-[100vw] bg-black opacity-[50%]  items-center"
        ></motion.div>
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          className=" fixed bottom-[10px] items-center w-[100vw]   flex space-y-[10px] flex-col  "
        >
          <div className=" h-[80px] xlg:h-[50px] w-[90vw] rounded-[3%] ml-[20px] space-x-[10px] lg:space-x-[50px] flex flex-row">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setInputText("|");
                setColor("text-gray-500");
                setClicked(false);
              }}
              className="bg-white w-[40px] lg:w-[80px] h-[70px] xlg:h-[40px] text-[18px] lg:text-[25px] flex flex-col justify-center items-center hover:bg-pink-600 hover:text-white rounded-[10%] font-primary"
            >
              <i class="fa-solid fa-x"></i>
            </motion.button>
            {display1 == true ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => {
                  if (clicked == false) {
                    setColor("text-gray-500");
                    setInputText("Can you briefly introduce  me to yourself?");
                  }
                }}
                onMouseLeave={() => {
                  if (clicked == false) {
                    setInputText("|");
                  }
                }}
                onClick={() => {
                  setText1("Can you briefly introduce  yourself to me?");
                  setText2(
                    `Hello there, I'm Hafri Adel, a Computer Engineering Master's graduate and a dedicated front-end developer with expertise in React and cutting-edge web development technologies. If you'd like to learn more about my background and skills, feel free to check out my `
                  );
                  setBoxSize1(BoxP2L);
                  setBoxSize1Mb(BoxP2LMB);
                  console.log(BoxP2LMB.width);
                  setBoxSize2(BoxC11L);
                  setBoxSize2Mb(BoxC11LMB);
                  setLength1("h-[210px]");
                  setLength2("h-[630px]");

                  setLength1MB("h-[100px] sm:h-[150px] ");
                  setLength2MB("h-[260px] sm:h-[310px]");

                  setButtonClicked(1);
                  setClicked(true);
                  setColor("text-black");
                  setInputText("Can you briefly introduce  yourself to me?");
                  setLinkWord("RESUME");
                  setLink("https://docdro.id/ozsnNXo");
                }}
                className="h-[70px] xlg:h-[40px]  flex flex-col items-center justify-center hover:bg-pink-600 hover:text-white w-[23%] bg-white text-[15px] lg:text-[18px] xl:text-[20px] font-bold  rounded-[3%] font-primary text-center"
              >
                Who are you?
              </motion.button>
            ) : null}
            {display2 == true ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => {
                  if (clicked == false) {
                    setColor("text-gray-500");
                    setInputText(
                      "Please explain why you believe we should pick you"
                    );
                  }
                }}
                onMouseLeave={() => {
                  if (clicked == false) {
                    setInputText("|");
                  }
                }}
                onClick={() => {
                  setText1("Please explain why you believe we should pick you");
                  setText2(
                    "As a computer engineer, you can expect an individual who is adept at analyzing and resolving problems, a professional with proficiency in multiple programming languages, and the ability to quickly adapt and learn new ones. In addition to my expertise in engineering, I am also a skilled web developer who is passionate about keeping up-to-date with the latest web development technologies. To learn more about my educational background and qualifications, click"
                  );
                  setBoxSize1(BoxP2L);
                  setBoxSize1Mb(BoxP2LMB);

                  setBoxSize2(BoxC19L);
                  setBoxSize2Mb(BoxC19LMB);

                  setLength1("h-[210px]");
                  setLength2("h-[930px]");
                  setLength1MB("h-[100px] sm:h-[150px]");

                  setLength2MB("h-[390px] sm:h-[460px]");

                  setButtonClicked(2);
                  setClicked(true);
                  setColor("text-black");
                  setInputText(
                    "Please explain why you believe we should pick you"
                  );
                  setLinkWord("HERE");
                  setLink("Studies");
                }}
                className="h-[70px] xlg:h-[40px] flex flex-col justify-center items-center w-[23%] hover:bg-pink-600 hover:text-white bg-white text-[16px] lg:text-[18px] xl:text-[20px] font-bold  rounded-[3%] font-primary text-center"
              >
                Why you?
              </motion.button>
            ) : null}
            {display3 == true ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => {
                  if (clicked == false) {
                    setColor("text-gray-500");
                    setInputText("show me what projects you have worked on");
                  }
                }}
                onMouseLeave={() => {
                  if (clicked == false) {
                    setInputText("|");
                  }
                }}
                onClick={() => {
                  setText1("show me what projects you have worked on");
                  setText2(
                    "Throughout my front-end development career, I have undertaken several high-quality projects that utlize the latest technologies in web development .For more information on each project, please click"
                  );
                  setBoxSize1(BoxP2L);
                  setBoxSize1Mb(BoxP2LMB);

                  setBoxSize2(BoxC9L);
                  setBoxSize2Mb(BoxC9LMB);

                  setLength1("h-[210px]");
                  setLength2("h-[430px]");
                  setLength1MB("h-[100px] sm:h-[150px]");

                  setLength2MB("h-[220px] sm:h-[270px]");

                  setButtonClicked(3);
                  setClicked(true);
                  setColor("text-black");
                  setInputText("show me what projects you have worked on");
                  setLinkWord("HERE");
                  setLink("Projects");
                }}
                className="h-[70px] xlg:h-[40px] flex flex-col justify-center items-center w-[23%] bg-white hover:bg-pink-600 hover:text-white text-[12px] lg:text-[18px] xlg:text-[16px] xl:text-[20px] font-bold  rounded-[3%] font-primary text-center"
              >
                Show me the projects you made
              </motion.button>
            ) : null}
            {display4 == true ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => {
                  if (clicked == false) {
                    setColor("text-gray-500");
                    setInputText("How can i contact you?");
                  }
                }}
                onMouseLeave={() => {
                  if (clicked == false) {
                    setInputText("|");
                  }
                }}
                onClick={() => {
                  setText1("How can i contact you?");
                  setText2(
                    "If you believe that I am a good fit for a role in your company or require my services directly, please do not hesitate to contact me by filling out the form found  "
                  );
                  setBoxSize1(BoxP2L);
                  setBoxSize1Mb(BoxP2LMB);

                  setBoxSize2(BoxC7L);
                  setBoxSize2Mb(BoxC7LMB);

                  setLength1("h-[210px]");
                  setLength2("h-[430px]");
                  setLength1MB("h-[100px] sm:h-[150px]");

                  setLength2MB("h-[180px] sm:h-[230px]");

                  setButtonClicked(4);
                  setClicked(true);
                  setColor("text-black");
                  setInputText("How can i contact you?");
                  setLinkWord("HERE");
                  setLink("ContactMe");
                }}
                className="h-[70px] xlg:h-[40px] flex flex-col justify-center items-center w-[23%] bg-white hover:bg-pink-600 hover:text-white text-[14px] lg:text-[20px] font-bold  rounded-[3%] font-primary text-center"
              >
                How can i contact you?
              </motion.button>
            ) : null}
          </div>

          <div className="  w-[90vw] flex flex-row items-center rounded-[3%] ml-[20px]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setDisplay1(true);
                setDisplay2(true);
                setDisplay3(true);
                setDisplay4(true);
                setChatHistory([]);
                setInputText("|");
                setClicked(false);
              }}
              className="bg-white w-[40px] lg:w-[80px] h-[70px] xlg:h-[40px] text-[18px] lg:text-[25px] flex flex-col justify-center items-center hover:bg-pink-600 hover:text-white rounded-[10%] font-primary"
            >
              <i class="fa-solid fa-rotate-right"></i>
            </motion.button>
            <div className=" h-[70px] xlg:h-[50px] w-[80%] lg:w-[90%] flex flex-col justify-center ml-[10px] lg:ml-[50px] bg-white lg:mb-[5px]">
              <motion.h1
                className={`text-[16px] lg:text-[25px] font-primary ml-[8px] lg:ml-[20px] ${color}`}
              >
                {inputText}
              </motion.h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                if (inputText != "|") {
                  onClick(
                    text1,
                    text2,
                    boxSize1,
                    boxSize2,
                    length1,
                    length2,
                    linkWord,
                    link
                  );
                  setClicked(false);
                  setInputText("|");
                  if (buttonClicked == 1) {
                    setDisplay1(false);
                  }
                  if (buttonClicked == 2) {
                    setDisplay2(false);
                  }
                  if (buttonClicked == 3) {
                    setDisplay3(false);
                  }
                  if (buttonClicked == 4) {
                    setDisplay4(false);
                  }
                }
              }}
              className="bg-white text-black hover:text-white w:text-[18px] lg:text-[25px] hover:bg-pink-500 rounded-[10%] lg:mb-[4px] h-[70px] xlg:h-[53px] w-[40px] md:text-[25px] md:w-[100px] lg:w-[10%] ml-[10px] lg:ml-[30px]"
            >
              <i class="fas fa-paper-plane"></i>{" "}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
