import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { useDentistStates } from "../Context/DentistContext"
import { DentistStates } from "../Context/DentistContext"



const DentistDetail = () => {
  
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {state, dispatch} = useDentistStates()
  const {dentistSelected} = state
 
  useEffect(() => {
      axios(url)
      .then(res => dispatch({type: 'GET_DENTIST', payload: res.data}))
    }, [])

  return (
    <div>
      <img src="/public/images/doctor.jpg" alt="" />
      <h3>Nombre: {dentistSelected.name}</h3>
      <h3>Email: {dentistSelected.email}</h3>
      <h3>Phone: {dentistSelected.phone}</h3>
      <h3>Website: {dentistSelected.website}</h3>
      
    </div>
  )
}

export default DentistDetail

