import { useState, useEffect } from 'react';
import { Link,useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SearchForm from 'components/SearchForm/SearchForm';


const Movies = () => {
  const [query, setQuery] = useState('');
  const [findMovies, setFindMovies] = useState('');
  const [searchParams,setSearchParams] = useSearchParams();

searchParams.get('');


  useEffect(() => {
    if (!query) {
      return;
    }
    fetchQueryMovies(query)
      .then(result => {
        if(findMovies.length < 1){
          alert('Не найдено')

        }else{
          setFindMovies(result.data.results);
        }


      })

      .catch(error => console.log(error));
  }, [query]);

  const handleSearchFormSubmit = movieName => {
    setQuery(movieName);
    setSearchParams({query: movieName})
  };

  function fetchQueryMovies(query) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6d4189043188e599955137d322b584b7&language=en-US&query=${query}&page=1&include_adult=false`
    );
  }

  return (
    <>
      <SearchForm onSubmit={handleSearchFormSubmit} />
      <ul>
        {findMovies &&
          findMovies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;
