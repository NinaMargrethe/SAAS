import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import DevTools from '../containers/devTools';
import { persistStore, autoRehydrate } from 'redux-persist';

// Include to use extra features as middleware and dev tools
const enhancers = compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate(), // For localstorage
    DevTools.instrument()
);


// The 'store' is the container for redux data
const store = createStore(reducers, undefined, enhancers);

// Store state - except for the search reducer
persistStore(store, { blacklist: ['search'] });

export { store };