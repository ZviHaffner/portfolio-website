import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <p className="flex gap-1">
          {"<"}
          <span className="text-green-500 hover:text-blue-500 hover:underline hover:underline-offset-2">
            Zvi Haffner
          </span>
          {" />"}
        </p>
      </Link>

      <ul className="list-none flex gap-5">
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
    </nav>
  );
};

export default Nav;
