import { combineReducers } from "redux";
import SearchApi, { SearchMovie } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie
  });

export default rootReducer;