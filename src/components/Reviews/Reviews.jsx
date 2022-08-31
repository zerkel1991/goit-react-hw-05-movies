import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReview(movieId)
      .then(result => {
        setReview(result.data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const fetchReview = movieId => {
    return axios.get(
      ` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=6d4189043188e599955137d322b584b7&language=en-US&page=1`
    );
  };

  return (
    <div>
      <ul>
        {review.length > 1 ? (
          review.map(el => (
            <li key={el.id}>
              <h2>Author: {el.author}</h2>
              <p>{el.content}</p>
            </li>
          ))
        ) :
          <div>
            <h2>We dont have any review for this movie</h2>
          </div>
        }
      </ul>
    </div>
  );
};

export default Reviews;
