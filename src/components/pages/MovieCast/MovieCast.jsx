import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import { getCastMovie } from 'components/apiServise/apiMovies';

const MovieCast = () => {
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
        const result = await getCastMovie(movieId);
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

  const location = useLocation();

  const { cast } = state.item;
  console.log(cast);

  // const listMovies = items.map(item => (
  //   <li key={item.id}>
  //     <Link state={{ from: location }} to={`/movies/${item.id}`}>
  //       {item.title}
  //     </Link>
  //   </li>
  // ));

  // "genres": [
  // {
  //   "id": 18,
  //   "name": "Drama"
  // }

  return (
    <ul className="container">
      {/* {cast.map(({ id, name, character }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${movieId}`}>
            <p>{name}</p>
            <p>{character}</p>
          </Link>
        </li>
      ))} */}
    </ul>
  );
};
export default MovieCast;
