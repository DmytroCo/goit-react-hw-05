import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import s from "./MoviesPage.module.css"

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MGU1ZTE4ZWQ3M2EyMWJiNjNhNWE3ZTUwY2M5ZiIsIm5iZiI6MTc0MDM0MTE5NC4wOTQsInN1YiI6IjY3YmI3ZmNhMDZiNTUzNmJkYzBhYmIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ss9e6eKiQsB4XiT3w0GQ3w3Z91jJLoNzmPe2W1ZOyCE';
const BASE_URL = 'https://api.themoviedb.org/3';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''; 
  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
              query,
              api_key: API_TOKEN,
            },
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          });
          setMovies(response.data.results);
        } catch (error) {
          console.log('Error fetching movies:', error);
        }
      };
      fetchMovies();
    }
  }, [query]); 

  return (
    <div className={s.container}>
      <h1 className={s.title}>Movie Search</h1>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;