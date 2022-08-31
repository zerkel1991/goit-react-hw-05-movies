import { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';



const Home = lazy(() => import('./pages/HomePage/Home'));
const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));



export const App = () => {
  return (
    <div>
      <nav className='Nav'>
        <NavLink className="NavLink"  to="/">Home</NavLink>
        <NavLink className="NavLink"  to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}/>

        <Route path ="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
