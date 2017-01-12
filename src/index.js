import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from './containers/devTools';
import { store } from './store/index';
import { Router, browserHistory } from 'react-router';
import routes from './routes/index';

ReactDOM.render(
  <Provider store={store}>
      <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools/>
      </div>
  </Provider>
  , document.querySelector('.container'));