import axios from "axios";
import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom'
import s from './Cast.module.css'
const Cast = () => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/original';
  const [cast,setCast] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    fetchCastMovies(movieId)
    .then(result=>{setCast(result.data.cast)
     })
    .catch(error => console.log(error))

  }, [movieId]);

const fetchCastMovies = (movieId) =>{

  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6d4189043188e599955137d322b584b7&language=en-US`
  );

}

  return (
    <div>
      <ul>
      {cast && cast.map((el) => (
        <li key={el.id}>
        <img src={basePosterUrl + el.profile_path} alt="phot" width="100px" />
        <span className={s.text}>{el.name}</span>
        <span className={s.text}>Character: {el.character}</span>
    </li>
      ))}


      </ul>
     </div>
  )
}

export default Cast
