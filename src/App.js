import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutMePage from "./Pages/AboutMePage";
import Header from "./Componenets/Header";
import Projects from "./Pages/ProjectPage";
import ContactMePage from "./Pages/ContactMePage";
import Achievements from "./Pages/Achievements";
function App() {
  const [header, setHeader] = React.useState(false);
  const [headerKey, setHeaderKey] = React.useState(0);
  const [hoverEn, setHoverEn] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [animate, setAnimate] = React.useState(true);
  return (
    <main>
      <Header
        key={headerKey}
        header={header}
        setHeaderKey={setHeaderKey}
      ></Header>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setHeader={setHeader}
              setHeaderKey={setHeaderKey}
              hoverEn={hoverEn}
              setHoverEn={setHoverEn}
              button={button}
              setButton={setButton}
              animate={animate}
            />
          }
        ></Route>
        <Route
          path="/AboutMe"
          element={
            <AboutMePage
              setHeader={setHeader}
              setHeaderKey={setHeaderKey}
              setAnimate={setAnimate}
              animate={animate}
            />
          }
        ></Route>
        <Route
          path="/Projects"
          element={
            <Projects
              setHeader={setHeader}
              setHeaderKey={setHeaderKey}
              setAnimate={setAnimate}
              animate={animate}
            />
          }
        ></Route>
        <Route
          path="/ContactMe"
          element={
            <ContactMePage
              setHeader={setHeader}
              setHeaderKey={setHeaderKey}
              setAnimate={setAnimate}
              animate={animate}
            />
          }
        ></Route>
        <Route
          path="/Achievements"
          element={
            <Achievements
              setHeader={setHeader}
              setHeaderKey={setHeaderKey}
              setAnimate={setAnimate}
              animate={animate}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
