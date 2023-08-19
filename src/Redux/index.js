import { combineReducers } from "redux";
import SearchApi, { ComingSoon, RandomMovie, SearchMovie } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie,
    comingSoon: ComingSoon,
    randomMovie: RandomMovie
  });

export default rootReducer;