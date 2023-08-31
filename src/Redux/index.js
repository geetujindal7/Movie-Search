import { combineReducers } from "redux";
import SearchApi, { ComingSoon, RandomMovie, SearchMovie, Keyboard, Popular } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie,
    comingSoon: ComingSoon,
    randomMovie: RandomMovie,
    keywords: Keyboard,
    popular: Popular
  });

export default rootReducer;