import { Link, useLocation,} from "react-router-dom"
import { useDentistStates } from "../Context/DentistContext"

const Card = ({item}) => {
  const location = useLocation()
  console.log(location);
  const {dispatch} = useDentistStates()
  
  return (
    <div classname="card">
      <img src="/public/images/doctor.jpg" alt="" /> 
      <Link to={'/dentist/'+item.id}>
        <h3>{item.name}</h3>
      </Link>
        <h4>{item.username}</h4>
        <button onClick={() => dispatch({type: 'ADD_FAV', payload: item.id})}>
          🌟
        </button>
        
        
        

    </div>
  )
}

export default Card