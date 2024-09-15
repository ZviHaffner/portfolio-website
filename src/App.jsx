import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Home/>
      <About />
      <Projects />
      <div className="flex-grow">
        <Routes>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
