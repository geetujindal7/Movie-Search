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
const airToday = [];
const onAir = [];
const topRatedSeries = [];
const episodeDetail =[];
const punjabi = [];
const SearchTV = [];


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

export const SearchTVReducer = (state= SearchTV, action) => {
    switch(action.type) {
        case 'SearchTV':           
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

export const airTodayReducer = (state = airToday, action) => {
    switch(action.type) {
        case 'airToday': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const onAirReducer = (state = onAir, action) => {
    switch(action.type) {
        case 'onAir': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const topRatedSeriesReducer = (state = topRatedSeries, action) => {
    switch(action.type) {
        case 'topRatedSeries': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const episodeDetailReducer = (state = episodeDetail, action) => {
    switch(action.type) {
        case 'episodeDetail': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export const punjabiReducer = (state = punjabi, action) => {
    switch(action.type) {
        case 'punjabi': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}


export default SearchApi