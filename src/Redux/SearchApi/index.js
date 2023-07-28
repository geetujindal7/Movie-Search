import axios from "axios";


const actorData = [];
const movieData = [];

const SearchApi = (state= actorData, action) => {
    switch(action.type) {
        case 'SearchApi': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const SearchMovie = (state= movieData, action) => {
    switch(action.type) {
        case 'SearchMovie': 
            console.log(action.payload)
            // if(action.payload[0].Text)
            // {
            //     console.log("entered")
            // }
            state =  {...state, state: action.payload}
            console.log(state)
            return state
        default:
            return state;
    }
}

export default SearchApi