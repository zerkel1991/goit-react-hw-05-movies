import { useState } from "react"
import PropTypes from 'prop-types';
import s from './SearchForm.module.css'
const SearchForm = ({onSubmit}) =>{
const [movieName,setMovieName] = useState('')

const handleMovieNameChange = (e) => {
  setMovieName(e.target.value)
}
const handleSubmit = (e) =>{
e.preventDefault()
if(!movieName.trim()){
  return alert("Введите запрос")
 }
onSubmit(movieName)
setMovieName('')
}

return(
<form className={s.form} onSubmit={handleSubmit} >


    <input
      className={s.input}
      name = 'movieName'
      value = {movieName}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleMovieNameChange}

    />
    <button  className={s.btn} type="submit" >Search</button>
  </form>
)


}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};


export default SearchForm
