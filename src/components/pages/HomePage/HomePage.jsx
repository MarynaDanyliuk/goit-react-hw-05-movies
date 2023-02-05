import css from '../HomePage/HomePage.module.css';

import Movies from 'components/Movies/Movies';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h2>Home page</h2>
      <Movies />
    </div>
  );
};
export default HomePage;
