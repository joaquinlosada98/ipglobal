import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './MovieApp';

import { Provider } from 'react-redux';
import appStore from './store/store';

ReactDOM.render(
  <Provider store={appStore}>
      <MovieApp />
  </Provider>,
  document.getElementById('root')
);

