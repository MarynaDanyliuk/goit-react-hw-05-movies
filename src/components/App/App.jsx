import { Routes, Route } from 'react-router-dom';

// import css from './App.module.css';

import Menu from '../Menu/Menu';
import HomePage from 'components/pages/HomePage/HomePage';
import MoviesPage from 'components/pages/MoviesPage/MoviesPage';
import MovieDetails from 'components/pages/MovieDetails/MovieDetails';
import MovieCast from 'components/pages/MovieCast/MovieCast';
import MovieReviews from 'components/pages/MovieReviews/MovieReviews';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
