import {SEARCH_ALBUMS} from '../actions/index';

export default function (state = [], action) {

    switch (action.type){
        case SEARCH_ALBUMS:
            console.log(action.payload.data);
    }
    return state;
}