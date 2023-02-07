import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, Link } from 'react-router-dom';

import css from '../MovieDetails/MovieDetails.module.css';

import { getSingleMovie } from 'components/apiServise/apiMovies';

const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  console.log(movieId);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

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
    poster_path,
    overview,
    vote_averag,

    // genres: { id, name },
  } = state.item;

  return (
    <div className={css.container}>
      <button onClick={goBack} type="button">
        Go back
      </button>
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{vote_averag}</p>
      <img src={poster_path} alt="pic"></img>
      {/* <p>
        {id}
        {name}
      </p> */}
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
