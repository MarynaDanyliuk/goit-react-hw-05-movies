import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  useNavigate,
  NavLink,
  useLocation,
} from 'react-router-dom';

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

  const location = useLocation();
  // console.log(location);
  console.log(location.state);

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

  const { title, release_date, poster_path, overview, vote_average, genres } =
    state.item;

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
        <img src={poster_path} alt="pic"></img>
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
        <Outlet />
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
