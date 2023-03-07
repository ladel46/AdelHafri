import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
