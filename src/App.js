import {  HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Academics" exact element={<Academics />} />
          <Route path="/Projects" exact element={<Projects />} />
          <Route path="/Experience" exact element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
