import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movies }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  return (
    <div className="movie__card-wrapper">
      {loading
        ? new Array(10)
            .fill(0)
            .map((element, index) => (
              <div className="skeleton" key={index}></div>
            ))
        : movies?.map((movie) => (
            <div
              key={movie.imdbID}
              className="movie__card"
              onClick={() => {
                navigate(`/search/details/${movie.imdbID}`);
              }}
            >
              <img src={movie.Poster} alt="" className="movie__poster" />
              <div className="details">
                <div className="card__movie--title">{movie.Title}</div>
                <div className="year">{movie.Year}</div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default MovieCard;
