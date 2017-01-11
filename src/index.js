import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import DevTools from './containers/DevTools';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
      <div>
        <App />
        <DevTools/>
      </div>
  </Provider>
  , document.querySelector('.container'));