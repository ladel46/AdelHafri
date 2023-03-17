import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectThumbnail from "../Componenets/ProjectThumbnail";
import ProjectDetailsLittleLemon from "../Componenets/ProjectDetailsLemon";
import ProjectDetailsSuggest from "../Componenets/ProjectDetailsSuggest";
import SuggestGame from "../images/SuggestGame.jpg";
import LittleLemon from "../images/LittleLemon.jpg";
import LittleLemonGif from "../images/LittleLemonThumbnail.gif";
import SuggestGameGif from "../images/SuggestGame.gif";

export default function Projects(props) {
  React.useEffect(() => {
    props.setHeader(true);
    props.setHeaderKey(1);
  }, []);
  const [page, setPage] = React.useState("Suggest");
  return (
    <section id="Projects">
      <div className="flex flex-row w-full relative ">
        <div className="flex flex-col w-[23%] h-[100vh] border-greenM border-r-[10px]"></div>

        <div className="flex flex-col w-[23%] h-[100vh] items-center  fixed h-[100vh] p-[30px] border-r-[10px] overflow-y-hidden space-y-[20px] border-greenM ">
          <h1 className="font-secondary text-transparent  bg-clip-text font-extrabold bg-gradient-to-r from-greenM to-pink-600  text-center font-bold text-[35px] ">
            Projects
          </h1>
          <ProjectThumbnail
            Page={"Suggest"}
            setPage={setPage}
            img={SuggestGame}
            Gif={SuggestGameGif}
          ></ProjectThumbnail>
          <ProjectThumbnail
            Page={"Lemon"}
            setPage={setPage}
            img={LittleLemon}
            Gif={LittleLemonGif}
          ></ProjectThumbnail>
        </div>
        <div className="flex flex-col  w-[77%] relative items-center  p-[30px]   space-y-[20px]  bg-gradient-to-r from-blueM  to-pink-800">
          {page == "Suggest" ? (
            <ProjectDetailsSuggest></ProjectDetailsSuggest>
          ) : null}
          {page == "Lemon" ? (
            <ProjectDetailsLittleLemon></ProjectDetailsLittleLemon>
          ) : null}
        </div>
      </div>
    </section>
  );
}
