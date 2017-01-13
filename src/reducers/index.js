import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AlbumsReducer from './albumsReducer';


const rootReducer = combineReducers({
    search: SearchReducer,
    albums: AlbumsReducer
});

export default rootReducer;
