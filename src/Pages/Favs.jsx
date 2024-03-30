import { useDentistStates } from "../Context/DentistContext"
import Card from "../Components/Card"

const Favs = () => {

  const {state} = useDentistStates()
  return (
    <div>     
      {state.favs.map(fav => <Card key={fav.id} item={fav}/>)}
    </div>
  )
}

export default Favs