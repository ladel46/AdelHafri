import React from "react";
import Robot from "../images/Robot2.png";
import ChatBox from "../images/ChatBox.png";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMePage(props) {
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
  }, []);
  return (
    <section id="AboutMe">
      <div className="flex flex-col relative justify-center items-center w-[90%] bg-white rounded-[0.5%] mt-[30px]  mx-auto  ">
        <div className="flex   flex-row container  h-[35vh] w-[80%] top-0  mt-[20px] scale-[1.1] justify-center items-start  w-full">
          <motion.img src={Robot} alt="" className={"w-[300px]"} />
          <div className="w-full relative ">
            <div className="flex bg-Main  bg-cover bg-center w-[400px] h-[100px] scale-[1.3] mt-[100px] ml-[30px] items-center justify-center flex-col relative">
              <h1 className="  rounded-full p-[10px] text-[35px] font-primary ml-[80px] mt-[5px] font-bold text-blueM">
                Who are you?
              </h1>
            </div>
          </div>
        </div>
        <div className="flex relative flex-row container  h-[35vh] w-[80%] top-0   scale-[1.1] justify-end  items-start  w-full">
          <div className="      bg-greenM rounded-[4%] transform -scale-x-100    scale-[1.3] mt-[130px]   items-center justify-center ">
            <h1 className="   px-[10px] w-[100%] text-[30px] text-center transform -scale-x-100 font-primary font-bold text-blueM">
              I'am adel, a front end dev
            </h1>
          </div>
          <motion.img src={Robot} alt="" className={"w-[300px]"} />
        </div>
      </div>
    </section>
  );
}
