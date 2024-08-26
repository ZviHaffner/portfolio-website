import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path="*" element={<ErrorPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
