import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { watchList, page, setPage, movieList, addMovie, removeMovie } = props;

  const decrement = () => {
    return setPage(page - 1);
  };

  const increment = () => {
    return setPage(page + 1);
  };

  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
      />
    );
  });

  return (
    <div className="page">
      <h1>Tobin's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
