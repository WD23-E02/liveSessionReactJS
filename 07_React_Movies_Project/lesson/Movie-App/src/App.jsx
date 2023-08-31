import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "./App.css";
import MoviesContainer from "./components/MoviesContainer";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState(false);



  // reusable function , is used once the user submit the input, or when the input text change
  const handleSearch = async (text) => {
    if (text === "") {
      setMovies([]);
      return;
    }

    try {
      // setMovies([]);
      setLoaded(true);

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=50033905&s=${text}`
      );
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setLoaded(false);
        setMovies(data.Search);
        setError(null);
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      setError(error);
    }
  };

  console.log(movies);
  return (
    <>
      <Search handleSearch={ handleSearch } />
      { loaded ? (
        <FaSpinner className="spinner" />
      ) : (
        <MoviesContainer movies={ movies } />
      ) }
    </>
  );
}

export default App;
