import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';
import s from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);
  const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  const location = useLocation();
  const navigate = useNavigate();
  
  const backLink = useRef(location.state?.from || '/movies'); 
  console.log(location);
  
  useEffect(() => {
    const apiKey = '7d370e5e18ed73a21bb63a5a7e50cc9f';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    axios
      .get(url)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <main className={s.container}>
      <button 
        onClick={() => navigate(backLink.current)} 
        className={s.button}
      >
        ⬅ Back
      </button>

      <div className={s.div}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
          className={s.poster}
        />
        <div>
         <h2 className={s.title}>{movieDetails.title}</h2>
         <p className={s.rating}>Rating: {movieDetails.vote_average}★  </p>
         <h3>Overview</h3>
         <p>{movieDetails.overview}</p>
         <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
       
      </div>

      <div className={s.additionalInfo}>
        <h3>Additional Information</h3>
        <ul className={s.linkList}>
          <li><Link to="cast" className={s.link}>Cast</Link></li>
          <li><Link to="reviews" className={s.link}>Reviews</Link></li>
        </ul>
      </div>

      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;