import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { moviesDetails } from "../../services/movies";
import { IoPlayBackSharp } from "react-icons/io5";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await moviesDetails(movieId);
        if (!data) {
          throw new Error("Movie not found");
        }
        setDetails(data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!details) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.box}>
      <Link className={s.goBack} to={goBackRef.current}>
        <IoPlayBackSharp /> Go Back
      </Link>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
        alt={details.title}
      />
      <h2 className={s.title}>{details.title}</h2>
      <p className={s.text}>
        <span className={s.span}>User Score:</span>{" "}
        {details.vote_average.toFixed(1)}
      </p>
      <p className={s.text}>
        <span className={s.span}>Overview:</span> {details.overview}
      </p>
      <p className={s.text}>
        <span className={s.span}>Genres:</span>{" "}
        {details.genres.map((genre) => genre.name).join(", ")}
      </p>
      <h2 className={s.title}>Additional information</h2>
      <ul className={s.navList}>
        <li className={s.itemNav}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li className={s.itemNav}>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
