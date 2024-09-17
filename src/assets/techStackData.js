import { DiPostgresql } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  RiFirebaseLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const techStackData = {
  confident: {
    JavaScript: FaJsSquare,
    "Node.JS": FaNodeJs,
    React: FaReact,
    "React Native": FaReact,
    Postgresql: DiPostgresql,
    "Express.JS": SiExpress,
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    TailwindCSS: RiTailwindCssFill,
  },
  familiar: {
    "Next.js": RiNextjsLine,
    Firebase: RiFirebaseLine,
    MongoDB: SiMongodb,
  },
};

export default techStackData;
