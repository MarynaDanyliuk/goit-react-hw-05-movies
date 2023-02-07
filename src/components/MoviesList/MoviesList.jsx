import { Link, useLocation } from 'react-router-dom';

import css from '../MoviesList/MoviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const listMovies = items.map(item => (
    <li className={css.movie_item} key={item.id}>
      <Link
        className={css.movie_link}
        state={{ from: location }}
        to={`/movies/${item.id}`}
      >
        {item.title}
      </Link>
    </li>
  ));

  return <ul className={css.movie_list}>{listMovies}</ul>;
};
export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
