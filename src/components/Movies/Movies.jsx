import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getMovies from 'components/apiServise/apiMovies';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
      error: null,
    });
    // const fetchMovies = async () => {
    //   setState({
    //     ...state,
    //     loading: true,
    //     error: null,
    //   });
    //   try {
    //     const result = await getMovies();
    //     console.log(result);

    //     setState(prevState => {
    //       return {
    //         ...prevState,
    //         items: [...prevState.items, ...result.results],
    //       };
    //     });
    //   } catch (error) {
    //     setState({
    //       ...state,
    //       error,
    //     });
    //   } finally {
    //     setState(prevState => {
    //       return {
    //         ...prevState,
    //         loading: false,
    //       };
    //     });
    //   }
    // };
    const data = getMovies();

    data
      .then(response => {
        console.log(response);
        setState({
          items: [...items, ...response.results],
        });
      })
      .catch(error => console.log('Error'));
    // fetchMovies();

    console.log('запускаємо useEffect');
  }, []);

  const { items, loading, error } = state;

  const listMovies = items.map(item => (
    <li key={item.id}>
      <Link to={`/movies/:${item.id}`}>{item.title}</Link>
    </li>
  ));

  return (
    <div>
      <ul>{listMovies}</ul>
      {loading && <p>...loading</p>}
      {error && <p>...load failed</p>}
    </div>
  );
};
export default Movies;
