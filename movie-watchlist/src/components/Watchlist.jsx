import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = (props) => {
    const {watchList} = props;

    let movieDisplay = watchList.map(movie => {
        return <MovieCard movie={movie}/>
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default Watchlist;