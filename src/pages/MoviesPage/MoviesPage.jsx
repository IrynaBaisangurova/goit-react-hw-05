import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
import { searchMovies } from "../../services/movies";
import {  useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const result = await searchMovies(query);
          setMovies(result);
        } catch (error)  {
           console.error("Failed to fetch movies", error);
         
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      // toast.error("Please enter your search movies");
      alert("Please enter your search movies!");
      return;
    }

    setSearchParams({ query });
  };

  return (
    <div className={s.box}>
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
