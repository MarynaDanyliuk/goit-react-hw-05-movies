import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSingleMovie } from 'components/apiServise/apiMovies';

const SingleMoviePage = () => {
  const [state, setState] = useState({
    item: {},
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
        const result = await getSingleMovie(movieId);
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
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

  const {
    title,
    release_date,
    overview,
    vote_averag,
    genres: { id, name },
  } = state.item;

  // "genres": [
  // {
  //   "id": 18,
  //   "name": "Drama"
  // }

  return (
    <div className="container">
      <h2>
        {title}
        {release_date}
      </h2>
      <p>{overview}</p>
      <p>{vote_averag}</p>
      <p>
        {id}
        {name}
      </p>
    </div>
  );
};
export default SingleMoviePage;
