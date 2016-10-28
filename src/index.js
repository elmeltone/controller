import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
/*import { Provider } from 'react-redux';
import store, { history } from './store';*/

import App from './components/App';

ReactDOM.render(
  /*<Provider store={store}>*/
    <Router /*history={history}*/history={hashHistory}>
      <Route path='/' component={App}>
      </Route>
    </Router>,
  /*</Provider>*/

document.getElementById('root'));
