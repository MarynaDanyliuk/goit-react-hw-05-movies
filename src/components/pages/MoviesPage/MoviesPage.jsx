import css from '../HomePage/HomePage.module.css';

import MoviesSerchForm from '../../MoviesSearchForm/MoviesSearchForm';
import { searchMovies } from 'components/apiServise/apiMovies';
import MoviesList from 'components/MovieList/MovieList';

import { useState, useEffect } from 'react';

const MoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await searchMovies(search);
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: [...result.results],
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    if (search) {
      fetchMovies();
    }

    console.log('запускаємо useEffect');
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearch(search);
  };

  console.log(search);

  return (
    <div className={css.container}>
      <h2>Movies search page</h2>
      <MoviesSerchForm onSubmit={changeSearch} />
      {state.items.length > 0 && <MoviesList items={state.items} />}
    </div>
  );
};
export default MoviesPage;
