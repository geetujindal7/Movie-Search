import { comingSoon, keyword, movie, options, randomMovie, Popular, airTodayModal, onAir, topRatedSeries, episodeDetails, punjabi, tvSearch } from "@/Redux/modal";
import axios from "axios";


export const SearchApi = (p)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'SearchApi' });
    // Perform Axios request
    axios.request(options(p))
      .then((response) => {
        // Dispatch action with the received user data
        dispatch({
          type: 'SearchApi',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const SearchMovie = (p)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'SearchMovie' });
    // Perform Axios request
    axios.request(movie(p))
      .then((response) => {
        // if(response?.data?.results?.length === 0)
        // {
        //   axios.request(tvSearch(p))
        //   .then((response) => {
        //     console.log(response)
        //     // Dispatch action with the received user data
        //     dispatch({
        //       type: 'SearchMovie',
        //       payload: response.data.results,
        //     });
        //   }).catch((error) => {
        //     console.log(error, "error")
        //     // Dispatch action when the API request fails
        //   });
        // }
        // Dispatch action with the received user data
        dispatch({
          type: 'SearchMovie',
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const SearchTVAction = (p)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'SearchTV' });
    // Perform Axios request
    axios.request(tvSearch(p))
      .then((response) => {        
        dispatch({
          type: 'SearchTV',
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const ComingSoon = (id, genre, page)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'ComingSoon' });
    // Perform Axios request
    axios.request(comingSoon(id, genre, page))
      .then((response) => {
        // Dispatch action with the received user data
        dispatch({
          type: 'ComingSoon',
          payload: response.data,
          id: id
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const randomMov = (l, list)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    // dispatch({ type: 'randomMovie' });
    // Perform Axios request
    axios.request(randomMovie(l,list))
      .then((response) => {
        // Dispatch action with the received user data
        dispatch({
          type: 'randomMovie',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const Keyword = (search) => {
  return (dispatch) => {   
    axios.request(keyword(search))
      .then((response) => {
        dispatch({
          type: 'keyword',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const airToday = (page) => {
  return (dispatch) => {   
    axios.request(airTodayModal(page))
      .then((response) => {
        dispatch({
          type: 'airToday',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
} 

export const PopularAPI = (page) => {
  return (dispatch) => {   
    axios.request(Popular(page))
      .then((response) => {
        dispatch({
          type: 'popular',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const onAirAction = (page) => {
  return (dispatch) => {   
    axios.request(onAir(page))
      .then((response) => {
        dispatch({
          type: 'onAir',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const topRatedSeriesAction = (page) => {
  return (dispatch) => {   
    axios.request(topRatedSeries(page))
      .then((response) => {
        dispatch({
          type: 'topRatedSeries',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const episodeDetailAction = (season, id) => {
  return (dispatch) => {   
    axios.request(episodeDetails(season, id))
      .then((response) => {
        dispatch({
          type: 'episodeDetail',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}


export const punjabiAction = (page) => {
  return (dispatch) => {   
    axios.request(punjabi(page))
      .then((response) => {
        dispatch({
          type: 'punjabi',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

