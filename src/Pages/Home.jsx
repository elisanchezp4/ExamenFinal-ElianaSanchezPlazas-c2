import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../Components/Card"
import { useDentistStates} from "../Context/DentistContext"


const Home = () => {
    const {state} = useDentistStates()
      
  return (
    <div>
      {state.dentistList.map((item) => <Card key={item.id} item={item}/>)}
      
    </div>
  )
}

export default Home