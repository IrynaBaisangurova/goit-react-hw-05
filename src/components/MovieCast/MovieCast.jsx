import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesCast } from "../../services/movies";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await moviesCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  if (!cast) return;

  return (
    <div>
      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.id} className={s.item}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p className={s.title}>{item.name}</p>
            <p className={s.title}>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
