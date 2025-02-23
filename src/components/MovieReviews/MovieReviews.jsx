import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import s from "./MovieReviews.module.css"

const MovieReview = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null)
  
  useEffect(() => {
      if (!movieId) return;
    const apiKey = 'd0ba3b07158e6ff2c3613fa0f654b7e0';
    const url = (`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);;
    axios
      .get(url)
      .then(response => {
        setReview(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]); 
    if (review === null) {
        return <p>Loading...</p>;
  }
  if (review.length === 0) {
    return <p>Sorry, there is no data about the reviews.</p>;
  }
 return (
     <div className={s.reviewContainer}>
      {review.map((rev) => (
        <div key={rev.id} className={s.reviewItem}>
          <p><strong>Author:</strong> {rev.author}</p>
          <p>{rev.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReview