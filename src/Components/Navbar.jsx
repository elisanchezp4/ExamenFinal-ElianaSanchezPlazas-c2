import { Link, useNavigate } from "react-router-dom"
import { routes } from "../utils/routes"

const Navbar = () => {
  const navigate = useNavigate()
  
  return (
    
    <div class="navbar"> 
       <div><img class="DH" src="/images/DH.png" alt="" /></div> 
        <Link to={routes.home}><h4>Home</h4></Link>
        <Link to={routes.contact}><h4>Contact</h4></Link>
        <Link to={routes.favs}><h4>Favs</h4></Link>

      
        <button onClick style= {{backgroundColor: 'black',}}>🌙</button>
    
    </div>
    
  )
}

export default Navbar