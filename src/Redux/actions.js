import { comingSoon, keyword, movie, options, randomMovie } from "@/Redux/modal";
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
        console.log(response)
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

export const ComingSoon = (p, genre, page)  => {
  console.log(genre)
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'ComingSoon' });
    // Perform Axios request
    axios.request(comingSoon(p, genre, page))
      .then((response) => {
        // Dispatch action with the received user data
        dispatch({
          type: 'ComingSoon',
          payload: response.data,
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
          payload: response.data.results,
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
