import css from '../Menu/menu.module.css';

import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

const Menu = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.menu}>
        <li>
          <NavLink className={getClassName} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movies/:movieId">
            MovieDetails
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movies/:movieId/cast">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to="/movies/:movieId/reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

// __________________MovieDetails_______
//         <li>
//           <a href="/movies/:movieId/cast">Cast</a>
//         </li>
//         <li>
//           <a href="/movies/:movieId/reviews">Reviews</a>
//         </li>
