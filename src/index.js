import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import DevTools from './containers/DevTools';

const initialState = {};
const enhancers = compose(
    applyMiddleware(ReduxPromise),
    DevTools.instrument()
)

const store = createStore(reducers, initialState, enhancers);

ReactDOM.render(
  <Provider store={store}>
      <div>
        <App />
        <DevTools/>
      </div>
  </Provider>
  , document.querySelector('.container'));
