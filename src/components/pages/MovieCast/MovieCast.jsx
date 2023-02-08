import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';

import { getCastMovie } from 'components/apiServise/apiMovies';

import css from '../MovieCast/MovieCast.module.css';

const MovieCast = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await getCastMovie(movieId);
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: result.cast,
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

    fetchMovies();

    console.log('запускаємо useEffect');
  }, [movieId]);

  const { items } = state;

  const listCast = items.map(({ id, name, character }) => (
    <li key={id}>
      <p className={css.section_data}>Name: {name}</p>
      <p className={css.section_data}>Character: {character}</p>
    </li>
  ));

  return (
    <div>
      <ul className={css.movie_list}>{listCast}</ul>
    </div>
  );
};
export default MovieCast;
