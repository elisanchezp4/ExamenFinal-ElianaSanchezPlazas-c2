export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {...state, dentistList: action.payload}
        case 'GET_DENTIST':
            return {...state, dentistSelected: action.payload}
        case 'ADD_FAV':
            return {...state, 
                favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
            return {...state, favs: filteredFavs}
    }
    
}