import axios from "axios";


const initialData = [];

const SearchApi = (state= initialData, action) => {
    switch(action.type) {
        case 'SearchApi': 
            state =  {...state, state: action.payload}
            return state
        default:
            return state;
    }
}

export default SearchApi