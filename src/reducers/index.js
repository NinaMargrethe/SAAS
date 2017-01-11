import { combineReducers } from 'redux';
import SearchReducer from './searchReducer';
import AlbumlistReducer from './albumlistReducer';

const rootReducer = combineReducers({
    search: SearchReducer,
    albums: AlbumlistReducer
});

export default rootReducer;
