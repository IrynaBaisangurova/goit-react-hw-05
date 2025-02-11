import { useEffect, useState } from "react";
//  import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../services/movies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setMovies([]);
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={s.home}>
      <h1 className={s.title}>Trending today</h1>
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage />}
    </div>
    
  );
};

export default HomePage;


