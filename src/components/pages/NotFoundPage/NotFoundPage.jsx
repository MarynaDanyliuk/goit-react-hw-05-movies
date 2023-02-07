import { Link } from 'react-router-dom';
import css from 'components/pages/NotFoundPage/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.page_title}>Page not found...</h2>
      <Link to="/">to Home page</Link>
    </div>
  );
};
export default NotFoundPage;
