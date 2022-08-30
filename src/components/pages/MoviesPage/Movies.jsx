import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from 'components/SearchForm/SearchForm';



const Movies = () => {

  const [query,setQuery] = useState('')
  const [findMovies,setFindMovies] = useState('')

  console.log(findMovies)

  useEffect(() => {
    if(!query){
      return
    }
    fetchQueryMovies(query).then(result => setFindMovies(result.data.results))



  }, [query])






 const handleSearchFormSubmit = (movieName)=>{
    setQuery(movieName)
}


function fetchQueryMovies(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=6d4189043188e599955137d322b584b7&language=en-US&query=${query}&page=1&include_adult=false`
  );
}



  return (
    <SearchForm onSubmit={handleSearchFormSubmit}/>
  )
}

export default Movies
