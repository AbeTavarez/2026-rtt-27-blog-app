import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const navigate = useNavigate();
  
  const { login } = useAuth();
  
  const handleClick = () => {
    login();
    navigate("/blogs");
  };

  return (
    <div>
      <h2>Login page</h2>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default LoginPage;
