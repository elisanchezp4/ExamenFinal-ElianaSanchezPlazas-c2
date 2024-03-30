import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

export const DentistStates = createContext()

const initialState = {
    dentistList:[],
    dentistSelected: {},
    favs: []
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const url =`https://jsonplaceholder.typicode.com/users`


    useEffect(() => {
        axios(url)
        .then(res => {
            dispatch({type: 'GET_LIST', payload: res.data})
        })
    }, [])
    
    
    return (
        <DentistStates.Provider value={{state, dispatch}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)