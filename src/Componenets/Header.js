import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export default function Header(props) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const HandleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className={`${props.header ? null : "hidden"} h-[50px]`}></div>
      <motion.div
        key={props.key}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`${
          props.header ? null : "hidden"
        } flex flex-row bg-greenM justify-center  w-[100vw] h-[50px] items-center md:space-x-[10%] xlg:space-x-[15%] fixed top-0 z-50`}
      >
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          <h1 className="font-primary hidden md:flex font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600  ">
            HOME
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/AboutMe");
          }}
        >
          <h1 className="font-primary hidden md:flex font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            ABOUT
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/Projects");
          }}
        >
          <h1 className="font-primary hidden md:flex font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            PROJECTS
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/Studies");
          }}
        >
          <h1 className="font-primary hidden md:flex font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            STUDIES
          </h1>
        </button>
        <button
          onClick={() => {
            navigate("/ContactMe");
          }}
        >
          <h1 className="font-primary hidden md:flex font-extrabold text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-blueM to-pink-600 text-[20px] hover:text-pink-600 ">
            CONTACT
          </h1>
        </button>
        <button
          id="menu-btn"
          onClick={HandleClick}
          className={`${
            showMenu ? "open" : null
          } block absolute hamburger z-40 md:hidden  items-center`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
          {/* <img
            width={"20px"}
            src={Humburger}
            className={"absolute top-[25px] right-[25px] "}
          /> */}
        </button>
        {/* Mobile menu*/}
        <AnimatePresence mode="wait">
          {showMenu ? <MobileMenu></MobileMenu> : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
