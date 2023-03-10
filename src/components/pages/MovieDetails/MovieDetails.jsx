import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  Outlet,
  useNavigate,
  NavLink,
  useLocation,
} from 'react-router-dom';

import css from '../MovieDetails/MovieDetails.module.css';
// import default_image_large from 'src/img/default_image_large.png';

import { getSingleMovie } from 'components/apiServise/apiMovies';

const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    image: null,
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  console.log(movieId);

  const location = useLocation();

  const from = location.state?.from || '/movies';

  useEffect(() => {
    console.log('запускаємо useEffect');
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const data = await getSingleMovie(movieId);
        setState(prevState => {
          return {
            ...prevState,
            item: data,
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
  }, [movieId, setState]);

  const {
    original_title,
    title,
    release_date,
    overview,
    vote_average,
    genres,
    poster_path,
  } = state.item;

  const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
  };

  const navigate = useNavigate();

  // const goBack = () => navigate(location.state.from.pathname);

  const goBack = () => navigate(from);

  let genresListAll = genres || [];
  const genresList = genresListAll.map(({ id, name }) => (
    <li className={css.genre_item} key={id}>
      {name}
    </li>
  ));
  const userScore = (vote_average * 10).toFixed();
  const releaseData = new Date(release_date);
  const releaseYear = releaseData.getFullYear();

  return (
    <div className={css.container}>
      <button className={css.goback_button} onClick={goBack} type="button">
        Go back
      </button>
      <div className={css.wrapper_movie}>
        {poster_path ? (
          <img
            className={css.details__img}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            width="300px"
            height="450px"
          />
        ) : (
          <img
            className={css.details__img}
            src={
              'https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg'
            }
            alt="not available"
            width="300px"
            height="450px"
          />
        )}
        <div>
          <h2 className={css.page_title}>
            {title} ({releaseYear})
          </h2>
          <p className={css.section_data}>User score: {userScore}%</p>
          <h3 className={css.section_title}>Overview:</h3>
          <p className={css.section_data}>{overview}</p>
          <h3 className={css.section_title}>Genres:</h3>
          {genresListAll.length > 0 && (
            <ul className={css.genres}>{genresList}</ul>
          )}
        </div>
      </div>

      <div className={css.wrapper_link}>
        <h3 className={css.section_title}>Additional information:</h3>
        <NavLink
          state={{ from }}
          className={getClassName}
          to={`/movies/${movieId}/cast`}
        >
          Cast
        </NavLink>
        <NavLink
          state={{ from }}
          className={getClassName}
          to={`/movies/${movieId}/reviews`}
        >
          Reviews
        </NavLink>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;

// MovieDetails.defaultProps = {
//   item: {},
//   loading: false,
//   error: null,
// };
