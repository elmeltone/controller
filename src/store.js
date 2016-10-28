/*import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';*/

import state_obj from './data/state_obj';

const defaultState = {
  state_obj
};

const store = /*createStore(rootReducer, */defaultState/*)*/;

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
