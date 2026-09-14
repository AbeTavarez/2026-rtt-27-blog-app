import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("s"));
  const value = searchParams.get("s");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`,
      );
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, [value]);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}

export default SearchPage;
