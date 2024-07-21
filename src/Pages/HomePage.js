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
    "Achievements",
    "Conctact me",
    "Home",
  ];

  const [word, setWord] = React.useState(GreetingText[0]);
  const [angle, setAngle] = React.useState(130);
  const [faceX, setFaceX] = React.useState(-3);
  const [faceY, setFaceY] = React.useState(-3);

  const [eyeX, setEyeX] = React.useState(-11);
  const [eyeY, setEyeY] = React.useState(-6);

  return (
    // Section for the homepage
    <section id="HomePage">
      <div
        className={`${
          props.button ? "justify-center" : null
        } flex flex-col relative  items-center w-full h-full`}
      >
        {/* a circluar indicator that starts the website and indicates different elements */}
        <StartButton
          setHoverEn={props.setHoverEn}
          angle={angle}
          setAngle={setAngle}
          GreetingText={GreetingText}
          button={props.button}
          word={word.toUpperCase()}
          setWord={setWord}
          setButton={props.setButton}
          eyeX={eyeX}
          setEyeX={setEyeX}
          eyeY={eyeY}
          setEyeY={setEyeY}
          faceX={faceX}
          faceY={faceY}
          setFaceX={setFaceX}
          setFaceY={setFaceY}
        ></StartButton>
        {/* dark circles around the start button  */}
        <motion.div
          animate={{
            rotate: angle,
          }}
          onMouseEnter={() => {
            if (props.hoverEn == true) {
              setWord("Home");
              setAngle(0);
              setEyeX(0);
              setEyeY(0);
              setFaceX(0);
              setFaceY(0);
            }
          }}
          className={`absolute rounded-full h-[220px] w-[220px] lg:h-[300px] lg:w-[300px] fixed xlg:h-[450px] z-30 xlg:w-[450px] shadow-md  ${
            props.hoverEn && word != "Home" ? "shadow-pink-600" : "shadow-blueM"
          } bg-blueM`}
        ></motion.div>
        <div
          onMouseEnter={() => {
            if (props.hoverEn == true) {
              setWord("Home");
              setAngle(0);
              setAngle(0);
              setEyeX(0);
              setEyeY(0);
              setFaceX(0);
              setFaceY(0);
            }
          }}
          className="absolute rounded-full  fixed  h-[220px] w-[220px] lg:h-[300px] lg:w-[300px] xlg:h-[450px] rotate-180  z-20 xlg:w-[450px]  shadow-md  shadow-blueM bg-blueM"
        ></div>
        {/* Componenet of the different home page sections */}
        <HomePageSection
          setHeaderKey={props.setHeaderKey}
          button={props.button}
          word={word}
          setWord={setWord}
          setAngle={setAngle}
          hoverEn={props.hoverEn}
          setEyeX={setEyeX}
          setEyeY={setEyeY}
          setFaceX={setFaceX}
          setFaceY={setFaceY}
          animate={props.animate}
        ></HomePageSection>
      </div>
    </section>
  );
}
