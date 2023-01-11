import React from 'react'
import './HomeMoviesList.css'
import MovieCard from './MovieCard.jsx'

const HomeMoviesList = () => {
  return (
    <div className='home__movies-list-section'>
      <div className='section__title'>
        <h2 >Popular movies</h2>
      </div>
      <div className='movie__list-wrapper'>
        <MovieCard />
      </div>
    </div>
  )
}

export default HomeMoviesList