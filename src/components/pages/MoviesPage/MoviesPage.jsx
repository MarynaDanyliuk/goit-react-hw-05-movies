import css from '../MoviesPage/MoviesPage.module.css';

import MoviesSerchForm from '../../MoviesSearchForm/MoviesSearchForm';
import { searchMovies } from 'components/apiServise/apiMovies';
import MoviesList from 'components/MoviesList/MoviesList';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  // console.log(search);

  // const [search, setSearch] = useState('');

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
    // setSearch(search);
    setSearchParams({ search });
  };

  // console.log(search);

  const { items } = state;

  return (
    <div className={css.container}>
      <MoviesSerchForm onSubmit={changeSearch} />
      {items.length > 0 && <MoviesList items={items} />}
    </div>
  );
};
export default MoviesPage;

MoviesPage.defaultProps = {
  items: [],
};
