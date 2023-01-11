import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieDetails from "./MovieDetails";
import "./Movies.css";

const Movies = () => {
  const { landingSearch } = useParams();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState(landingSearch);

  function onSearch() {
    setSearchInput(search);
    getMovies(search);
  }

  async function getMovies(searchInput) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=91703714&s=${searchInput}`
    );
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    getMovies(searchInput);
  }, [searchInput]);

  function onSort(sortType) {
    let sortedMovies = [...movies];
    if (sortType === "NEW_TO_OLD") {
      sortedMovies.sort((a, b) => b.Year - a.Year);
    } else if (sortType === "OLD_TO_NEW") {
      sortedMovies.sort((a, b) => a.Year - b.Year);
    }
    setMovies(sortedMovies);
  }

  return (
    <div className="movies__container">
      <div className="search__section">
        <div>
          <h3 className="search__title">Search Movies here...</h3>
        </div>
        <div className="search__input movies__search">
          <input
            type="text"
            placeholder="Hangover, Ocean 11..."
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && onSearch()}
          />
          <button onClick={() => onSearch()}>Search</button>
        </div>
      </div>

      <div className="search__filter">
        <div className="search__result">
          <span>Search result for : {searchInput}</span>
        </div>

        <select
          id="filter"
          className="filter__select"
          onChange={(e) => onSort(e.target.value)}
        >
          <option value="DEFAULT">Sort</option>
          <option value="NEW_TO_OLD">New To Old</option>
          <option value="OLD_TO_NEW">Old To New</option>
        </select>
      </div>

      <div className="movies__section">
        <MovieCard movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
