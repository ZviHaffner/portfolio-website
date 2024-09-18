import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="nav" className="nav">
      <Link to={"/"}>
        <p className="flex gap-1">
          {"<"}
          <span className="text-green-500 hover:text-blue-500 hover:underline hover:underline-offset-2">
            Zvi Haffner
          </span>
          {" />"}
        </p>
      </Link>
      {/* Desktop Nav */}
      <ul className="hidden list-none md:flex gap-5">
        <li>
          <a href="#about">
            {"<"}
            <span className="nav_btn">About</span>
            {"/>"}
          </a>
        </li>
        <li>
          <a href="#projects">
            {"<"}
            <span className="nav_btn">Projects</span>
            {"/>"}
          </a>
        </li>
      </ul>
      {/* Mobile Nav */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FiX className="text-white text-2xl" />
        ) : (
          <FiMenu className="text-white text-2xl" />
        )}
      </div>
      {isOpen && (
        <ul className="md:hidden absolute top-12 left-0 w-full bg-green-950 p-5 flex flex-col items-center gap-5 rounded-b-3xl shadow-lg shadow-green-950/50">
          <li>
            <a href="#about">
              {"<"}
              <span className="nav_btn">About</span>
              {"/>"}
            </a>
          </li>
          <li>
            <a href="#projects">
              {"<"}
              <span className="nav_btn">Projects</span>
              {"/>"}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
