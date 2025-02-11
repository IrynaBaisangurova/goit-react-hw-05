import { useState, useEffect } from "react";
 import toast from "react-hot-toast";
import { searchMovies } from "../../services/movies";
import {  useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {  
      const fetchMovies = async () => {
        try {
          setIsLoading(true);
          const result = await searchMovies(query);
          setMovies(result);
        } catch   {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      //  toast.error("Please enter your search movies");
      alert("Please enter your search movies!");
      return;
    }
    setSearchParams({ query });
  };
  
  return (
    <div className={s.box}>
          {isError && <ErrorMessage />}
          {isLoading && <Loader />}
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          name="movies"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    
    </div>
  );
};

export default MoviesPage;
