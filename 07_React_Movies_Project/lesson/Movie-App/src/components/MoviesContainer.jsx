import React from "react";
import Card from "./Card";

function MoviesContainer({movies}) {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "aqua",
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        padding: "20px",
      }}
    >
      {movies.map((mov) => (
        <Card key={mov.imdbID} movie={mov} />
      ))}
    </div>
  );
}

export default MoviesContainer;
