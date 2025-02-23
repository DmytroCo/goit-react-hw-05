import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import axios from 'axios';
import s from './HomePage.module.css'

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJhM2IwNzE1OGU2ZmYyYzM2MTNmYTBmNjU0YjdlMCIsIm5iZiI6MTczODc4ODc3NC40NTcsInN1YiI6IjY3YTNjZmE2NzdiOGNlZDQ1NjY2YzQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S93Rvw_oFlzLEjOXywq3VWujPtWf6KwO_BQz8mC7L8I';
const BASE_URL = 'https://api.themoviedb.org/3';


const HomePage = () => {
  const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
async function fetchTrendingMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

        setMovies(response.data.results)
    } catch (error) {
    console.log(error);
}
} 
fetchTrendingMovies();
    }, [])
  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`, {
      state: { from: '/home' },
    });
  }
    
  return (
      <div>
      <h1 className={s.h1}>Most popular Films</h1>
      
          <MovieList movies={movies } onMovieClick={handleMovieClick} />
    </div>
  )
}

export default HomePage