import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { watchList, page, setPage, movieList } = props;

  let movieDisplay = movieList.map((movie) => {
    return <MovieCard movie={movie} />;
  });
  return (
    <div className="page">
      <h1>Tobin's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
