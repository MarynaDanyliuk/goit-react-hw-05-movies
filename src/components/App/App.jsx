import { Routes, Route } from 'react-router-dom';

import Menu from '../Menu/Menu';

import HomePage from 'components/pages/HomePage/HomePage';
import MoviesPage from 'components/pages/MoviesPage/MoviesPage';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
