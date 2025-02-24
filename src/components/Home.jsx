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
    <div id="home" className=" bg-green-50">
      <div className="md:w-4/5 lg:w-2/3 mx-auto mt-8 md:my-0 md:flex items-center gap-8 md:min-h-screen text-center md:text-left">
        <div>
          <h1 className="text-green-700">
            Hello I'm - <br />
            <span className="text-blue-700">Zvi Haffner</span>
          </h1>
          <h2>Software Engineer</h2>
          <p className="text-xl">
            I am a passionate Full-Stack engineer specialising in JavaScript and
            Front-End development, with a knack for turning complex problems into
            elegant, efficient solutions.
            <br />
            Please explore my portfolio, to see my projects and skills.
          </p>
          <div className="flex justify-center md:justify-normal gap-5 my-5">
            <div className="flex flex-col items-center text-blue-700 hover:text-green-700 transition-colors duration-300">
              <a href="https://www.linkedin.com/in/zvi-haffner/" target="_blank">
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
          className="mx-auto"
        />
        {isAtTop && (
          <FaAngleDoubleDown
            className="absolute bottom-5 left-1/2 text-green-700 animate-bounce hidden"
            size={40}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
