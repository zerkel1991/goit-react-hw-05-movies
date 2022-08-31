import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import s from './MovieRender.module.css'
const MovieRender = ({moviePoster,movieDetails}) => {
  const {title,overview,release_date,genres,vote_average} = movieDetails;
  const realeseYear = release_date?.slice(0,4)
  const votesPercentage = Math.round(vote_average*10);
  return(
    <>
    <div className={s.movieContainer}>
    <div>
    <img src={moviePoster} alt="poster" width="300px" />
  </div>
  <div className={s.infoContainer}>
    <h1>{title}({realeseYear})</h1>
    <span>User score: {votesPercentage} %</span>
    <h2>Overview</h2>
    <p>{overview}</p>
    <h3>Genres</h3>
    {genres && genres.map(el => (
      <span className={s.movieText} key={el.id}>{el.name}</span>
    ))}
</div>
</div>
<div>
  <h2>Additional information</h2>
  <Link className={s.outLink} to={`cast`}>Cast</Link>
  <Link className={s.outLink} to={`reviews`}>Reviews</Link>
</div>
  </>
  )
}



MovieRender.propTypes = {
  moviePoster: PropTypes.string,
  movieDetails:PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),

};

export default MovieRender
