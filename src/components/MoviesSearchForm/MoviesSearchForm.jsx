import { useState } from 'react';

const MoviesSerchForm = () => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChangd = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onsubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChangd}
        placeholder="Пошук"
      />
      <button>Шукати</button>
    </form>
  );
};

export default MoviesSerchForm;
