import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectThumbnail from "../Componenets/ProjectThumbnail";
import ProjectDetailsLittleLemon from "../Componenets/project-sections/ProjectDetailsLemon";
import ProjectDetailsSuggest from "../Componenets/project-sections/ProjectDetailsSuggest";
import ProjectAdelHafri from "../Componenets/project-sections/ProjectAdelHafri";
import SuggestGame from "../images/SuggestGame.jpg";
import LittleLemon from "../images/LittleLemon.jpg";
import AdelHafri from "../images/AdelHafri.jpg";
import LittleLemonGif from "../images/LittleLemonThumbnail.gif";
import SuggestGameGif from "../images/SuggestGame.gif";
import AdelGif from "../images/AdelHafri.gif";
import MyFundusLogo from "../images/myfundus-logo.svg";
import PlaceControlLogo from "../images/placecontrol-logo.png";

import MyFundus from "../Componenets/project-sections/MyFundus";
import PlaceControl from "../Componenets/project-sections/PlaceControl";
export default function Projects(props) {
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
    props.setAnimate(false);
  }, []);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 1440) {
      setDrag(0);
      setDragged(false);
      setBlur(true);
      setRotate(180);
    }
  });

  const [page, setPage] = React.useState("Adel");
  const [drag, setDrag] = React.useState(0);
  const [drag2, setDrag2] = React.useState(0);
  const [Rotate, setRotate] = React.useState(0);

  const [dragged, setDragged] = React.useState(false);
  const [blur, setBlur] = React.useState(true);
  React.useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const activePage = () => {
    switch (page) {
      case "Adel":
        return <ProjectAdelHafri />;
      case "Suggest":
        return <ProjectDetailsSuggest />;
      case "Lemon":
        return <ProjectDetailsLittleLemon />;
      case "Myfundus":
        return <MyFundus />;
      case "PlaceControl":
        return <PlaceControl />;
    }
  };

  return (
    <section id="Projects">
      <div className="flex flex-row w-full relative bg-gradient-to-r from-blueM via-blueM to-pink-900 ">
        <motion.div
          animate={{ x: drag }}
          transition={{ duration: 0.3 }}
          className="relative flex flex-col w-[0]  z-[40] xlg:w-[23%] h-[100vh] border-greenM lg:border-r-[10px]"
        ></motion.div>
        <div
          onClick={() => {
            setDrag(-310);
            setDragged(true);
            setBlur(false);
            setRotate(180);
          }}
          className={`w-[100vw] h-[100vh] bg-black opacity-[70%] z-[30] fixed ${
            blur ? "xlg:hidden" : "hidden"
          }`}
        ></div>

        <motion.div
          animate={{ x: drag }}
          transition={{ duration: 0.3 }}
          className="fixed z-30  flex flex-col items-center justify-center w-[310px]  top-[0px] bottom-[0px]"
        >
          <motion.button
            onClick={() => {
              if (dragged == false) {
                setDrag(-310);
                setDragged(true);
                setBlur(false);
                setRotate(180);
              } else {
                setDrag(0);
                setDragged(false);
                setBlur(true);
                setRotate(0);
              }
            }}
            className="absolute -ml-[5px] py-[5px]  -right-[30px]  h-[100px] w-[60px] rounded-[20%] text-[30px] text-blueM  bg-greenM  text-center xlg:hidden"
          >
            <motion.h1 animate={{ rotate: Rotate }} className="ml-[30px]">
              <i class="fa-solid fa-chevron-left"></i>{" "}
            </motion.h1>
          </motion.button>
        </motion.div>
        <motion.div
          animate={{ x: drag }}
          transition={{ duration: 0.3 }}
          className="flex flex-col w-[310px] bg-blueM z-[40] xlg:w-[23%] h-[100vh] items-center  fixed   border-r-[10px]  lg:overflow-y-auto space-y-[20px] border-greenM pt-4 "
        >
          <h1 className="font-secondary text-transparent  bg-clip-text  px-[10px] bg-gradient-to-r from-greenM to-pink-600  text-center font-bold text-[25px] lg:text-[30px] xl:text-[30px] ">
            Projects
          </h1>
          <div className="flex flex-col h-fit w-full bg-blueM z-[40] px-[30px]  items-center     lg:overflow-y-hidden space-y-[20px]  ">
            <ProjectThumbnail
              Page={"Myfundus"}
              setPage={setPage}
              img={MyFundusLogo}
              setBlur={setBlur}
              className="!bg-black"
              setDrag={setDrag}
              setDragged={setDragged}
              width={width}
              setRotate={setRotate}
            />
            <ProjectThumbnail
              Page={"Adel"}
              setPage={setPage}
              img={AdelHafri}
              Gif={AdelGif}
              setBlur={setBlur}
              setDrag={setDrag}
              setDragged={setDragged}
              width={width}
              setRotate={setRotate}
            />

            <ProjectThumbnail
              Page={"Suggest"}
              setPage={setPage}
              img={SuggestGame}
              Gif={SuggestGameGif}
              setBlur={setBlur}
              setDrag={setDrag}
              setDragged={setDragged}
              width={width}
              setRotate={setRotate}
            />
            <ProjectThumbnail
              Page={"PlaceControl"}
              setPage={setPage}
              img={PlaceControlLogo}
              setBlur={setBlur}
              className="!bg-white p-4"
              setDrag={setDrag}
              setDragged={setDragged}
              width={width}
              setRotate={setRotate}
            />
            <ProjectThumbnail
              Page={"Lemon"}
              setPage={setPage}
              img={LittleLemon}
              Gif={LittleLemonGif}
              setBlur={setBlur}
              setDrag={setDrag}
              setDragged={setDragged}
              width={width}
              setRotate={setRotate}
            />

            <h1 className="font-secondary text-greenM  text-center font-bold text-[15px] lg:text-[18px] xl:text-[20px] ">
              More to come soon...
            </h1>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 0 }}
          className="flex flex-col  w-[99vw] xlg:w-[72%] xl:w-[77%] relative items-center  p-[30px]   space-y-[20px]  "
        >
          {activePage()}
        </motion.div>
      </div>
    </section>
  );
}
