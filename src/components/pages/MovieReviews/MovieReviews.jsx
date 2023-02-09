import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsMovie } from 'components/apiServise/apiMovies';

import css from '../MovieCast/MovieCast.module.css';

const MovieReviews = () => {
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
        const result = await getReviewsMovie(movieId);
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: result.results,
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

  console.log(items);

  const listReviews = items.map(({ id, author, content }) => (
    <li key={id}>
      <p className={css.section_data}>Author: {author}</p>
      <p className={css.section_data}>Review: {content}</p>
    </li>
  ));

  return (
    <div>
      {items.length > 0 ? (
        <ul className={css.movie_list}>{listReviews}</ul>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};
export default MovieReviews;
