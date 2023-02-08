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

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const location = useLocation();
  console.log(location);

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

  const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
  };

  const { title, release_date, poster_path, overview, vote_average, genres } =
    state.item;

  console.log(genres);
  console.log(poster_path);

  // const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

  // console.log(genresList);

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
          <h3 className={css.section_title}>
            User Score:
            <span className={css.section_data}>{userScore}%</span>
          </h3>
          <h3 className={css.section_title}>Overview:</h3>
          <p className={css.section_data}>{overview}</p>
          <h3 className={css.section_title}>Genres:</h3>
          {/* <ul className={css.section_data}>{genresList}</ul> */}
          {/* <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul> */}
        </div>
      </div>

      <div className={css.wrapper_link}>
        <h3 className={css.section_title}>Additional information:</h3>
        <NavLink className={getClassName} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className={getClassName} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;

MovieDetails.defaultProps = {
  item: {},
  loading: false,
  error: null,
};
