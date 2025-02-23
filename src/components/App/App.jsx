import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReview = lazy(() => import('../MovieReviews/MovieReviews'));
const Navigation = lazy(() => import('../Navigation/Navigation'));
import s from './App.module.css';

const App = () => {
  return (
    <div>
      <div className= {s.div}>
        <Navigation/>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReview/> } />
        </Route>
              <Route path='*' element={<NotFoundPage/> } />
        </Routes>
      </Suspense>
          
      
    </div>
  )
}

export default App