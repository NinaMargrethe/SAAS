import { ADD_ALBUM, DELETE_ALBUM } from '../actions/index';
import _ from 'lodash';

const MAX_NUMBER_ALBUMS = 8;

function update(arr, key, newval) {
    const match = _.find(arr, key);
    if(match){
        const index = _.indexOf(arr, match);
        arr.splice(index, 1, newval);
    } else {
        arr.unshift(newval);
    }
}

export default function (state = [], action) {

    switch (action.type){
        case ADD_ALBUM:
            const newState = [...state];
            // Either update on existing ID or add it to the start
            update(newState, { id: action.payload.id } , action.payload);

            // Array can be no longer than MAX_NUMBER_ALBUMS long
            return newState.slice(0, MAX_NUMBER_ALBUMS);

        case DELETE_ALBUM:
            const deleteState = [ ...state ];
            _.remove(deleteState, { id: action.payload.id });
            return deleteState;
    }
    return state;
}