import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  const authContext = useContext(AuthContext);

  return {
    user: authContext.user,
    isAuthenticated: authContext.isAuthenticated,
    login: authContext.login,
    logout: authContext.logout,
  };
}

export default useAuth;