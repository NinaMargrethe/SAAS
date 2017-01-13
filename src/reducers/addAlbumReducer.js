import { ADD_ALBUM } from '../actions/index';

const MAX_NUMBER_ALBUMS = 8;

export default function (state = [], action) {

    switch (action.type){
        case ADD_ALBUM:
            const newState = [action.payload, ...state];
            return newState.slice(0, MAX_NUMBER_ALBUMS);
    }
    return state;
}