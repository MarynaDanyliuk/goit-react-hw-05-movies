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
  // const noProfileImg = 'src/img/default_image_large.jpg';

  const listCast = items.map(({ id, name, character, profile_path }) => (
    <li className={css.cast_item} key={id}>
      {profile_path ? (
        <img
          className={css.details__img}
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
          width="150px"
          height="220px"
        />
      ) : (
        <img
          className={css.details__img}
          src={
            'https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_User.jpg'
          }
          alt={name}
          width="150px"
          height="220px"
        />
      )}
      <p className={css.cast_data}>Name: {name}</p>
      <p className={css.cast_data}>Character: {character}</p>
    </li>
  ));

  return (
    <div>
      <ul className={css.cast_list}>{listCast}</ul>
    </div>
  );
};
export default MovieCast;
