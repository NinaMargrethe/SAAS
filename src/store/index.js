import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

// May be used to store default values at reducers key's
const initialState = {
    albums: [
        {
            id: '3vGtqTr5he9uQfusQWJ0oC',
            url: "https://i.scdn.co/image/463e545ef86af314c4b7c79ff17892531a80770e",
            name: "Platinum & Gold Collection"
        },
        {
            id: '7IW3NEq3Fxtm7FhOcosnBy',
            url: 'https://i.scdn.co/image/8e8afc9db649eaf32a33e38a501a8bd7f27a9591',
            name: '50'
        },
        {
            id:'4HuGWbYCiCvWvPo7KLWUnj',
            url: 'https://i.scdn.co/image/05d4e295b9149b2f74762bba540714dd79d2fae5',
            name: 'Never Gonna Give You Up'
        }
    ]
};

// Include to use extra features as middleware and dev tools
const enhancers = compose(
    applyMiddleware(ReduxPromise),
    DevTools.instrument()
);

// The 'store' is the container for redux data
export const store = createStore(reducers, initialState, enhancers);