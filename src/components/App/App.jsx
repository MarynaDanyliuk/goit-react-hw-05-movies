import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import css from './App.module.css';

import Menu from '../Menu/Menu';

const HomePage = lazy(() => import('components/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('components/pages/MovieDetails/MovieDetails')
);
const MovieCast = lazy(() => import('components/pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('components/pages/MovieReviews/MovieReviews')
);
const NotFoundPage = lazy(() =>
  import('components/pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  return (
    <div className={css.container}>
      <Menu />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// ___________________
// style={{
//   height: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   // justifyContent: 'center',
//   // alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
// ________________________________
// import HomePage from 'components/pages/HomePage/HomePage';
// import MoviesPage from 'components/pages/MoviesPage/MoviesPage';
// import MovieDetails from 'components/pages/MovieDetails/MovieDetails';
// import MovieCast from 'components/pages/MovieCast/MovieCast';
// import MovieReviews from 'components/pages/MovieReviews/MovieReviews';
// import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';
