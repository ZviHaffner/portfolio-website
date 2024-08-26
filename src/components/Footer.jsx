import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-5">
      <div className="flex justify-between">
        <div className="flex gap-5 ml-5 my-auto">
          <div className="flex flex-col items-center hover:text-white">
            <a
              href="https://www.linkedin.com/in/zvi-haffner-7697932a4/"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </a>
            <span className="text-xs mt-2">LinkedIn</span>
          </div>
          <div className="flex flex-col items-center hover:text-white">
            <a href="https://github.com/ZviHaffner" target="_blank">
              <FaGithub size={32} />
            </a>
            <p className="text-xs mt-2">GitHub</p>
          </div>
        </div>
        <div className="text-sm mr-5">
          <span className="flex gap-2 mb-2">
            <FaEnvelope size={20} />
            <p>zvihaffner@gmail.com</p>
          </span>
          <span className="flex gap-2 my-2">
            <FaPhone size={20} />
            <p>+447743587821</p>
          </span>
          <span className="flex gap-2 mt-2">
            <FaLocationDot size={20} />
            <p>Location: Manchester, UK</p>
          </span>
        </div>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Zvi Haffner. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
