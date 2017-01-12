import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import DevTools from '../containers/devTools';

// May be used to store default values at reducers key's
const initialState = {
};

// Include to use extra features as middleware and dev tools
const enhancers = compose(
    applyMiddleware(ReduxPromise),
    DevTools.instrument()
);

// The 'store' is the container for redux data
export const store = createStore(reducers, initialState, enhancers);