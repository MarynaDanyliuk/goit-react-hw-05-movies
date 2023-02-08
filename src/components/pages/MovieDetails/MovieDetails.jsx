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
  const { title, release_date, poster_path, overview, vote_average, genres } =
    state.item;

  console.log(genres);
  console.log(poster_path);
  console.log(release_date);

  // const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

  const userScore = vote_average * 10;
  const releaseData = new Date(release_date);
  const releaseYear = releaseData.getFullYear();

  console.log(releaseYear);

  return (
    <div className={css.container}>
      <button className={css.goback_button} onClick={goBack} type="button">
        Go back
      </button>
      <div className={css.wrapper_movie}>
        <img src={poster_path} alt="pic"></img>
        <div>
          <h2 className={css.page_title}>
            {title} <time dateTime="YYYY">({releaseYear})</time>
          </h2>
          <h3 className={css.section_title}>
            User Score:
            <span className={css.section_data}>{userScore}%</span>
          </h3>
          <h3 className={css.section_title}>Overview:</h3>
          <p>{overview}</p>
          <h3 className={css.section_title}>Genres:</h3>
          {/* <ul>{genresList}</ul> */}
          {/* <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul> */}
        </div>
      </div>

      <div className={css.wrapper_link}>
        <Link className={css.link} to={`/movies/${movieId}/cast`}>
          Cast
        </Link>
        <Link className={css.link} to={`/movies/${movieId}/reviews`}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.defaultProps = {
  genres: [],
};
