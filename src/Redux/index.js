import { combineReducers } from "redux";
import SearchApi, { ComingSoon, RandomMovie, SearchMovie, Keyboard, Popular, airTodayReducer, onAirReducer, topRatedSeriesReducer, episodeDetailReducer, punjabiReducer, SearchTVReducer } from "./SearchApi";


const rootReducer = combineReducers({
    searchApi: SearchApi,
    searchMovie: SearchMovie,
    comingSoon: ComingSoon,
    randomMovie: RandomMovie,
    keywords: Keyboard,
    popular: Popular,
    airToday: airTodayReducer,
    onAir: onAirReducer,
    topRatedSeries: topRatedSeriesReducer,
    episodeDetail: episodeDetailReducer,
    punjabi: punjabiReducer, 
    searchTv: SearchTVReducer
  });

export default rootReducer;