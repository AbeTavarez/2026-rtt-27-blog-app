import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };
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

      {isAuthenticated ? (
        <button onClick={onLogout}>Sign out</button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
}

export default NavBar;
