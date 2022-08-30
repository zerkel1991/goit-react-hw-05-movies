import { useState } from "react"


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
<form  onSubmit={handleSubmit} >


    <input

      name = 'movieName'
      value = {movieName}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleMovieNameChange}

    />
    <button type="submit" >Search</button>
  </form>
)


}

export default SearchForm
