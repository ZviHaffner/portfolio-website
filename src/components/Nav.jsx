import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between border-2 border-red-500 bg-red-50 px-10 py-2 mb-5">
      <p>
        <Link to={"/"}>ZH</Link>
      </p>
      <ul className="list-none flex gap-5">
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
