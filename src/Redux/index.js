import { combineReducers } from "redux";
import SearchApi, { ComingSoon, SearchMovie } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie,
    comingSoon: ComingSoon
  });

export default rootReducer;