import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(({ data }) => setTrendMovies(data.results))
      .catch(error => console.log(error));
  }, []);



  function fetchTrendMovies() {
    return axios.get(
      `
 https://api.themoviedb.org/3/trending/movie/day?api_key=6d4189043188e599955137d322b584b7`
    );
  }

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies &&
          trendMovies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
