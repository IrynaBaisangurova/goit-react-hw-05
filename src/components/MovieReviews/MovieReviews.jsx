import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "../../services/movies";

import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMoviesReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div className={s.box}>
      {!reviews.length && <h3>We don't have any reviews for this movie</h3>}
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <h3 className={s.title}>Author: {item.author}</h3>
            <p className={s.text}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
