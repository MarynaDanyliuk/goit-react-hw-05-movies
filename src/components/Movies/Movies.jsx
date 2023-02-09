import { useState, useEffect } from 'react';

import { getMovies } from 'components/apiServise/apiMovies';
import MoviesList from 'components/MoviesList/MoviesList';

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

  return (
    <div>
      {items.length > 0 && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>...load failed</p>}
    </div>
  );
};
export default Movies;

// ______________________________
// const listMovies = items.map(item => (
//   <li key={item.id}>
//     <Link to={`/movies/${item.id}`}>{item.title}</Link>
//   </li>
// ));

/* {items.length > 0 && <ul>{listMovies}</ul>} */
