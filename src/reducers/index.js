import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AddAlbumReducer from './addAlbumReducer';


const rootReducer = combineReducers({
    search: SearchReducer,
    albums: AddAlbumReducer

});

export default rootReducer;
