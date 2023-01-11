import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { imdbID } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=91703714&i=${imdbID}`
      );
      setMovies(data);
    }

    getMovieDetails();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="movies__detail--wrapper">
      {loading ? (
        <div className="movie__details--loading">
          <div>
            <div className="skeletonbtn"></div>
            <div className="skeleton2"></div>
          </div>

          <div className="movies__right-loading">
            <div className="skeleton3"></div>
            <div className="skeleton4"></div>
            <div className="skeleton5"></div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="btn" onClick={() => {navigate('/')}}>
              <span className="btn__tab">Search more movies</span>
            </div>
            <div className="movies__poster">
              {movies.Poster ? (
                <img src={movies.Poster} alt="movie-poster" />
              ) : null}
            </div>
          </div>

          <div className="movies__description">
            <div className="ratings">
              <span className="ratings__tab">imdb rating</span>
              <span className="imdb__rating">
                {movies.imdbRating ? (
                  <div>Rating ({movies.imdbRating})</div>
                ) : null}
              </span>
            </div>

            <div className="movie__title">
              {movies.Title ? <div>{movies.Title}</div> : null}
            </div>

            <div className="movie__year">
              {movies.Year ? <div>{movies.Year}</div> : null}
            </div>

            <div className="movie__genre">
              <span className="genre__tab">{movies?.Genre}</span>
              {/* <span className="genre__tab">{movies?.Genre}</span>
          <span className="genre__tab">{movies?.Genre}</span> */}
            </div>

            {/* split(' ')[1].slice(0, -1) */}

            <div className="movie__plot">
              <p className="movie__plot--para">
                {movies.Plot ? <div>{movies.Plot}</div> : null}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
