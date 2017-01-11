import {ALBUM_LIST} from '../actions/index';

export default function (state = {}, action) {

    switch (action.type){
        case ALBUM_LIST:
            return { ...state, albums: action.payload.data  };
    }
    return state;
}