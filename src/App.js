import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutMePage from "./Pages/AboutMePage";
import Header from "./Componenets/Header";
import Projects from "./Pages/ProjectPage";
function App() {
  const [header, setHeader] = React.useState(false);
  const [headerKey, setHeaderKey] = React.useState(0);
  return (
    <main>
      <Header
        key={headerKey}
        header={header}
        setHeaderKey={setHeaderKey}
      ></Header>
      <Routes>
        <Route
          path="/Home"
          element={
            <HomePage setHeader={setHeader} setHeaderKey={setHeaderKey} />
          }
        ></Route>
        <Route
          path="/AboutMe"
          element={
            <AboutMePage setHeader={setHeader} setHeaderKey={setHeaderKey} />
          }
        ></Route>
        <Route
          path="/Projects"
          element={
            <Projects setHeader={setHeader} setHeaderKey={setHeaderKey} />
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
