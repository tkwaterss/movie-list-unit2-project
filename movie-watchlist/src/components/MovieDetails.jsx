import React from "react";

const MovieDetails = (props) => {
  const { movie } = props;

  console.log(movie);
  return (
    <div className="details-container">
      <img
        className="detail-image"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="Movie Poster"
      />
      <div className="movie-details">
        <h1>{movie.original_title}</h1>
        <h3>{`Release Date: ${movie.release_date}`}</h3>
        <h4>{`Movie Rating: ${movie.vote_average}`}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
