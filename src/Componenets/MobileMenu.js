import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MobileMenu() {
  const navigate = useNavigate();

  return (
    <motion.div
      key="Modal"
      initial={{ scale: 0.7, opacity: 0, x: 0 }}
      animate={{ scale: 1, opacity: 1, x: 1, y: 114 }}
      exit={{
        scaleX: 0.5,
        opacity: 0,

        transition: { duration: 0.3 },
      }}
      transition={{ duration: 0.4 }}
      ease="easeOut"
    >
      <div>
        <nav className="  container  text-blueM bg-white  items-center z-[100] text-xxl  drop-shadow-xl md:hidden font-primary font-bold flex flex-col mx-auto   mt-[53px] space-y-2 w-[45vw] ">
          <button
            onClick={() => {
              navigate("/");
            }}
            className={
              "flex flex-col justify-center hover:text-Sbage items-center w-full bg-white hover:bg-greenM hover:text-white h-[40px] text-center  "
            }
          >
            {" "}
            HOME
          </button>
          <button
            onClick={() => {
              navigate("/AboutMe");
            }}
            className={
              "flex flex-col justify-center items-center hover:text-Sbage w-full bg-white hover:bg-greenM hover:text-white h-[40px] text-center "
            }
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              navigate("/Projects");
            }}
            className={
              "flex flex-col justify-center items-center hover:text-Sbage w-full bg-white hover:bg-greenM hover:text-white h-[40px] text-center  "
            }
          >
            PROJECTS
          </button>
          <button
            onClick={() => {
              navigate("/Studies");
            }}
            className={
              "flex flex-col justify-center items-center hover:text-Sbage w-full bg-white hover:bg-greenM hover:text-white h-[40px]  text-center "
            }
          >
            {" "}
            STUDIES
          </button>
          <button
            onClick={() => {
              navigate("/ContactMe");
            }}
            className={
              "flex flex-col justify-center items-center hover:text-Sbage w-full bg-white hover:bg-greenM hover:text-white h-[40px] text-center  "
            }
          >
            CONTACT
          </button>
        </nav>
      </div>
    </motion.div>
  );
}
