import {Outlet, useParams} from 'react-router-dom'
import { useState, useEffect,lazy, Suspense} from 'react';
import axios from 'axios';

import Btn from 'components/Btn/Btn';
const MovieRender = lazy(() => import('components/MovieRender/MovieRender'));
const basePosterUrl = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () =>{
const [movieDetails,setMovieDetails] = useState([]);
const [moviePoster,setMoviePoster] = useState('');

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



  return(

      <div>
        <Btn/>
        <Suspense fallback={<div>Loading...</div>}>
        <MovieRender movieDetails = {movieDetails} moviePoster= {moviePoster} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
        </Suspense>
      </div>
  )
}

export default MovieDetails

