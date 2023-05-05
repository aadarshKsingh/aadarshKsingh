import Pseudonym from "./Pseudonym";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="card pt-10 pb-10  rounded-none">
        <ul className="border-red-600 border-2 my-0  mx-auto relative z-20 w-fit text-center rounded-md py-1 px-10 overflow-hidden">
          <li className="navBarLi">
            <NavLink to="/">About</NavLink>
          </li>
          <li  className="navBarLi">
            <NavLink to="/Socials">Socials</NavLink>
          </li>
          <Pseudonym />
          <li className="navBarLi">
            <NavLink to="/Thoughts">Thoughts</NavLink>
          </li>
          <li className="navBarLi">
            <NavLink to="/Dump">Dump</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
