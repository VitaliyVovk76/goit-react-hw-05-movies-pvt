import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as bookShelfAPI from "../../services/movieshelf-api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    bookShelfAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((rev) => (
            <li key={rev.id}>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Reviews</p>
      )}
    </>
  );
};

export default ReviewsList;
