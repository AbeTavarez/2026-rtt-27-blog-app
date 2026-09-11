import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/blogs');
  };
  
  return (
    <div>
      <h2>Login page</h2>

      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default LoginPage;
