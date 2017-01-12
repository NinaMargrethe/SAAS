import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import DevTools from '../containers/devTools';

const LOCAL_STORAGE_KEY = 'SuperAwesomeAlbumSearch';

// May be used to store default values at reducers key's
// Check if something is saved to localstorage, if so use it as initial state.
const stateFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
const initialState = stateFromLocalStorage ? JSON.parse(stateFromLocalStorage) : {};

// Include to use extra features as middleware and dev tools
const enhancers = compose(
    applyMiddleware(ReduxPromise),
    DevTools.instrument()
);


// The 'store' is the container for redux data
export const store = createStore(reducers, initialState, enhancers);

// Bind changes to state to be saved to localstorage
store.subscribe(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()))
});