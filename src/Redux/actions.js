import { comingSoon, movie, options } from "@/pages/modal";
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
        // Dispatch action with the received user data
        dispatch({
          type: 'SearchMovie',
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}

export const ComingSoon = (p)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'ComingSoon' });
    // Perform Axios request
    axios.request(comingSoon(p))
      .then((response) => {
        console.log(response)
        // Dispatch action with the received user data
        dispatch({
          type: 'ComingSoon',
          payload: response.data.results,
        });
      })
      .catch((error) => {
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}