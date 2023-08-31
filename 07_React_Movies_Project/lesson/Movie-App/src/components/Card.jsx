import React, {useEffect, useState} from "react";

function Card({movie}) {
  const [movieDetails, setMovieDetails] = useState({});

  async function handleOneMovie() {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=50033905&t=${movie.Title}`
    );

    const data = await res.json();
    console.log(data);
    setMovieDetails(data);
  }

  useEffect(() => {
    handleOneMovie();
  }, []);

  return (
    <div
      style={{
        background: "white",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid red",
        margin: "10px",
      }}
    >
      <h2>{movieDetails.Title}</h2>
      <span>{movieDetails.Actors}</span>
      <img src={movieDetails.Poster} />
      <i>{movieDetails.Type}</i>
    </div>
  );
}

export default Card;
