import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/blogs"
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
      >
        Blog
      </NavLink>
    </nav>
  );
}

export default NavBar;
