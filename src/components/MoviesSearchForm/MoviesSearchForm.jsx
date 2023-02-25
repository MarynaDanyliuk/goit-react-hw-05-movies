import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import css from 'components/MoviesSearchForm/MoviesSearchForm.module.css';

const MoviesSerchForm = ({ onSubmit }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get('search');
  // setSearchParams({ search });

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
    onSubmit({ ...state });
    // setState({
    //   search: '',
    // });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChangd}
        placeholder="Search..."
        className={css.input}
      />
      <button className={css.search_button}></button>
    </form>
  );
};

export default MoviesSerchForm;
