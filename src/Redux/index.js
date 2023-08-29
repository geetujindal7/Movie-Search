import { combineReducers } from "redux";
import SearchApi, { ComingSoon, RandomMovie, SearchMovie, Keyboard } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie,
    comingSoon: ComingSoon,
    randomMovie: RandomMovie,
    keywords: Keyboard
  });

export default rootReducer;