import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const basePosterUrl = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () =>{
const [movieDetails,setMovieDetails] = useState([]);
const [moviePoster,setMoviePoster] = useState('')
const {movieId} = useParams();




useEffect(() => {
  fetchTrendMovies(movieId)
  .then(result=>{setMovieDetails(result.data)
    setMoviePoster(basePosterUrl + result.data.poster_path)}
  )
  .catch(error => console.log(error))
}, [movieId]);



function fetchTrendMovies(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=6d4189043188e599955137d322b584b7&language=en-US`
  );
}
const {title,overview,release_date,genres,vote_average} = movieDetails;
const realeseYear = release_date?.slice(0,4)
const votesPercentage = Math.round(vote_average*10);


  return(

      <div>
        <div>
          <img src={moviePoster} alt="poster" width="300px" />
        </div>
        <div>
          <h1>{title}({realeseYear})</h1>
          <span>User score: {votesPercentage} %</span>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && genres.map(el => (
            <span key={el.id}>{el.name}</span>
          ))}


        </div>

      </div>
  )
}

export default MovieDetails


// id: 361743
// title
// overview
// release_date
//
// genres: Array(4)
// 0: {id: 12, name: 'Adventure'}
// 1: {id: 10751, name: 'Family'}
// 2: {id: 16, name: 'Animation'}
// 3: {id: 18, name: 'Drama'}
// vote_average: 7.141 должно быть в %
// posterpath
// https://image.tmdb.org/t/p/original/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg
