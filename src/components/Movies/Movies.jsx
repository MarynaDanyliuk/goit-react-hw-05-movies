import { useState, useEffect } from 'react';

import getMovies from 'components/apiServise/apiMovies';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setState({
        ...state,
        loading: true,
        error: null,
      });
      try {
        const result = await getMovies();
        console.log(result);

        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result.results],
          };
        });
      } catch (error) {
        setState({
          ...state,
          error,
        });
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
  });

  return <ul></ul>;
};
export default Movies;
