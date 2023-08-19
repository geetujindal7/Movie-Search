import axios from "axios";


const actorData = [];
const movieData = [];
const comingSoon = [];
const randomMovie = [];

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
          
            state =  {...state, state: action.payload}
            console.log(state)
            return state
        default:
            return state;
    }
}

export const ComingSoon = (state= comingSoon, action) => {
    switch(action.type) {
        case 'ComingSoon': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const RandomMovie = (state = randomMovie, action) => {
    switch(action.type) {
        case 'randomMovie': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export default SearchApi