import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const [landingSearch, setLandingSearch] = useState('');
  const navigate = useNavigate();



  return (
    <header>
      <div className="landing">
        <div className="hero">
          <div className="heading">
            <h1 className="title">
              Search for the movies you love with  <span className="brand">MovieFavs</span>
            </h1>

            <p className="sub-title">
              We love movies just as much as you do. Search and learn about the
              best movies for free.
            </p>

            <div className="search__input landing__search">
              <input 
              type="text" placeholder="search here..." 
              onChange={(event) => setLandingSearch(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && navigate(`/search/${landingSearch}`)}/>
              
                <button className="search__btn" onClick={() => navigate(`/search/${landingSearch}`)}>Search</button>
              
            </div>
          </div>

          <div className="landing__banner">
            <figure>
              <img
                src="https://creativecloud.adobe.com/content/dam/2019/201905/20190515_screenfonts/20190515_ScreeFonts_marquee.jpg"
                alt="movie-banner"
                className="movie__banner-img"
              />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Landing;
