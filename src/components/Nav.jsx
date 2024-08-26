import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <p>
        <Link to={"/"}>ZH</Link>
      </p>
      <ul className="list-none flex gap-5">
        <li>
          <Link to={"/about"} >
            {"<"}
            <span className="nav_btn">About</span>
            {" />"}
          </Link>
        </li>
        <li>
          <Link to={"/projects"}>
            {"<"}
            <span className="nav_btn">Projects</span>
            {" />"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
