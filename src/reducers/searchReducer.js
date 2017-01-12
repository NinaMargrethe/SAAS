import { SEARCH_ALBUMS, CLEAR_SEARCH } from '../actions/index';

export default function (state = {}, action) {

    switch (action.type){
        case SEARCH_ALBUMS:
            return { ...state, searchResult: action.payload.data  };
        case CLEAR_SEARCH:
            return { };
    }
    return state;
}