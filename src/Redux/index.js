import { combineReducers } from "redux";
import SearchApi from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
  });

export default rootReducer;