import {ADD_ALBUM} from '../actions/index';

export default function (state = [], action) {

    switch (action.type){
        case ADD_ALBUM:
            return [...state, action.payload];
    }
    return state;
}