import { options } from "@/pages/modal";
import axios from "axios";


export const SearchApi = (p)  => {
  return (dispatch) => {
    // Dispatch action to indicate that the API request has started
    dispatch({ type: 'SearchApi' });
    // Perform Axios request
    axios.request(options(p))
      .then((response) => {
        console.log("entered then")

        // Dispatch action with the received user data
        dispatch({
          type: 'SearchApi',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("entered catch")
        console.log(error, "error")
        // Dispatch action when the API request fails
      });
  };
}