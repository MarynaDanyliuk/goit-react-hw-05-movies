import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const listMovies = items.map(item => (
    <li key={item.id}>
      <Link state={{ from: location }} to={`/movies/${item.id}`}>
        {item.title}
      </Link>
    </li>
  ));

  return <ul>{listMovies}</ul>;
};
export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
