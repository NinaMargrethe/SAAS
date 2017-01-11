import {SEARCH_ALBUMS} from '../actions/index';

export default function (state = {}, action) {


    switch (action.type){
        case SEARCH_ALBUMS:
            console.log("SEARCH ACTION: ", action.payload.data);
            return { ...state, searchResult: action.payload.data  };
    }
    return state;
}