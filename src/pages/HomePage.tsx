import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    // eg -> /search?s=chicken
    navigate(`/search?s=${searchTerm}`)
  }

  return (
    <div>
      <h2>Home Page</h2>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name=""
        id=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default HomePage;
