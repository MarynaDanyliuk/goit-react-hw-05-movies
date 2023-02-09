import { Link, useLocation } from 'react-router-dom';

import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();
  console.log(location);

  const listMovies = items.map(({ id, title }) => (
    <li className={css.movie_item} key={id}>
      <Link
        className={css.movie_link}
        state={{ from: location }}
        to={`/movies/${id}`}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul className={css.movie_list}>{listMovies}</ul>;
};
export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
