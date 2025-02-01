import css from './MovieList.module.css';
import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";


const MovieList = ({ filmsList }) => {
  const location = useLocation();
  return (
    <div className={css.containerList}>
      <ul className={css.filmsList}>
        {filmsList.map((film) => (
          <li key={film.id} className={css.filmItem}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <MovieItem dataFilm={film} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
