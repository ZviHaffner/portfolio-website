import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="lg:flex items-center lg:px-60 bg-green-50 min-h-screen"
    >
      <div className="px-10 py-5">
        <h1 className="text-green-700">
          Hello I'm - <br />
          <span className="text-blue-700">Zvi Haffner</span>
        </h1>
        <h2>Junior Software Engineer</h2>
        <p className="text-xl">
          I am a passionate Full-Stack engineer specialising in JavaScript and
          Front-End development, with a knack for turning complex problems into
          elegant, efficient solutions.
          <br />
          Please explore my portfolio, to see my projects and skills.
        </p>
        <div className="flex gap-5 my-5">
          <div className="flex flex-col items-center text-blue-700 hover:text-green-700 transition-colors duration-300">
            <a
              href="https://www.linkedin.com/in/zvi-haffner-7697932a4/"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
          <div className="flex flex-col items-center text-blue-700 hover:text-green-700 transition-colors duration-300">
            <a href="https://github.com/ZviHaffner" target="_blank">
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
      <img
        src="/sftwr-engineer-at-desk.png"
        alt="Software engineer working at desk"
        width={400}
      />
      {isAtTop && (
        <FaAngleDoubleDown
          className="absolute bottom-5 left-1/2 text-green-700 animate-bounce"
          size={40}
        />
      )}
    </div>
  );
};

export default Home;
