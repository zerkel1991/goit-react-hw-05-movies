
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Movies from './pages/MoviesPage/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div>
      <nav className='Nav'>
        <NavLink className="NavLink"  to="/">Home</NavLink>
        <NavLink className="NavLink"  to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path ="/movies/:movieId" element={<MovieDetails/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
