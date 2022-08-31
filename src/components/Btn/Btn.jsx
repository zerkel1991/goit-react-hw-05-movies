import { useNavigate } from "react-router-dom"
import s from './Btn.module.css'
const Btn = () => {
  const navigate = useNavigate();

const goBack = () =>{
  navigate(-1)
}

return(
  <button className={s.btn}type='button' onClick={goBack}>Go back</button>
)

}

export default Btn
