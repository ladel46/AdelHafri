import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="h-[50px]"></div>
      <motion.div
        key={props.key}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`${
          props.header ? null : "hidden"
        } flex flex-row bg-greenM justify-center w-[100vw] h-[50px] items-center space-x-[15%] fixed top-0 z-20`}
      >
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          <h1 className="font-primary font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600  ">
            HOME
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/AboutMe");
          }}
        >
          <h1 className="font-primary font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            ABOUT
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/Projects");
          }}
        >
          <h1 className="font-primary font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            PROJECTS
          </h1>
        </button>
        <button>
          <h1 className="font-primary font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            STUDIES
          </h1>
        </button>
        <button>
          <h1 className="font-primary font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            CONTACT
          </h1>
        </button>
      </motion.div>
    </header>
  );
}
