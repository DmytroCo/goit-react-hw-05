import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import s from "./MovieCast.module.css"
const defaultImg = "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
    const [cast, setCast] = useState(null)
    useEffect(() => {
    const apiKey = 'd0ba3b07158e6ff2c3613fa0f654b7e0';
    const url = (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);;
    axios
      .get(url)
      .then(response => {
        setCast(response.data.cast); 
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 
  if (cast === null) {
    return <p>Loading...</p>;
  }
    if (cast.length === 0) {
    return <p>Sorry, there is no data about the actors.</p>;
  }

 return (
   <div className={s.castContainer}>
      {cast.map((actor) => (
        <div key={actor.id} className={s.actorCard}>
          {actor.profile_path && (
            <img
  src={actor.profile_path 
    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
    : defaultImg
  }
  alt={actor.name}
  className={s.actorImage}
/>


          )}
          <p className={s.actorName}>{actor.name}</p>
          <p className={s.actorCharacter}>{actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast