import React from "react";
import StartButton from "../Componenets/StartButton";
import HomePageSection from "../Componenets/HomePageSection";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage(props) {
  React.useEffect(() => {
    props.setHeader(false);
    props.setHeaderKey(0);
  }, []);
  const GreetingText = [
    "About Me",
    "Projects",
    "Studies",
    "Conctact me",
    "Home",
  ];
  const [hoverEn, setHoverEn] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [word, setWord] = React.useState(GreetingText[0]);
  const [angle, setAngle] = React.useState(130);

  return (
    // Section for the homepage
    <section id="HomePage">
      <div
        className={`${
          button ? "justify-center" : null
        } flex flex-col relative  items-center w-full h-full`}
      >
        {/* a circluar indicator that starts the website and indicates different elements */}
        <StartButton
          setHoverEn={setHoverEn}
          angle={angle}
          setAngle={setAngle}
          GreetingText={GreetingText}
          button={button}
          word={word.toUpperCase()}
          setWord={setWord}
          setButton={setButton}
        ></StartButton>
        {/* dark circles around the start button  */}
        <motion.div
          animate={{
            rotate: angle,
          }}
          onMouseEnter={() => {
            if (hoverEn == true) {
              setWord("Home");
              setAngle(0);
            }
          }}
          className={`absolute rounded-full  fixed h-[450px] z-30 w-[450px] shadow-md  ${
            hoverEn && word != "Home" ? "shadow-pink-700" : "shadow-blueM"
          } bg-blueM`}
        ></motion.div>
        <div
          onMouseEnter={() => {
            if (hoverEn == true) {
              setWord("Home");
              setAngle(0);
            }
          }}
          className="absolute rounded-full  fixed   h-[450px] rotate-180  z-20 w-[450px]  shadow-md  shadow-blueM bg-blueM"
        ></div>
        {/* Componenet of the different home page sections */}
        <HomePageSection
          setHeaderKey={props.setHeaderKey}
          button={button}
          word={word}
          setWord={setWord}
          setAngle={setAngle}
          hoverEn={hoverEn}
        ></HomePageSection>
      </div>
    </section>
  );
}
