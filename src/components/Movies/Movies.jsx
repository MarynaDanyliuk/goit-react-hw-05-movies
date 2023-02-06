import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { getMovies } from 'components/apiServise/apiMovies';
import MoviesList from 'components/MovieList/MovieList';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await getMovies();
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: [...result.results],
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
  }, [setState]);

  const { items, loading, error } = state;

  // const listMovies = items.map(item => (
  //   <li key={item.id}>
  //     <Link to={`/movies/${item.id}`}>{item.title}</Link>
  //   </li>
  // ));

  return (
    <div>
      {items.length > 0 && <MoviesList items={items} />}
      {/* {items.length > 0 && <ul>{listMovies}</ul>} */}
      {loading && <p>...loading</p>}
      {error && <p>...load failed</p>}
    </div>
  );
};
export default Movies;
