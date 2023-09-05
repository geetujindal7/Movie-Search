import axios from "axios";


const actorData = [];
const movieData = [];
const comingSoon = [
    {
        data: [],
        loading: true
    }
];
const keywords = [];
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
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const ComingSoon = (state= comingSoon, action) => {
    switch(action.type) {
        case 'ComingSoon': 
        // console.log( action.payload?.filter((val) =>  val.results.genre_ids.includes(action.id)))
        // const res = action.payload?.filter((val) =>  val.results.genre_ids.includes(action.id))
        //     action.payload = {...action.payload, action.payload: result}
        // let result = action.payload
        // result = {...result, results: action.payload?.results?.filter((val) =>  val.genre_ids.includes(action.id))}
        // console.log(result)
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

export const Keyboard = (state = keywords, action) => {
    switch(action.type) {
        case 'keyword': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const Popular = (state = keywords, action) => {
    switch(action.type) {
        case 'popular': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export default SearchApi