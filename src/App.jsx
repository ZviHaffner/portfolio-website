import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
