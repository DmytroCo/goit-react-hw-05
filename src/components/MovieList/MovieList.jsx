import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import s from "./MovieList.module.css"


const MovieList = ({ movies, onMovieClick }) => {
    const location = useLocation();
  return (
      <div className={s.div} >
          {movies.map((movie) => {
              return <div className={s.cont}  key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } width={150}
          alt="poster"/>
                  <Link className={s.text} to={`/movies/${movie.id}`} state={{from: location.pathname + location.search}}>
                      {movie.title}
                  </Link>
              </div>
          })}
      </div>
  )
}

export default MovieList