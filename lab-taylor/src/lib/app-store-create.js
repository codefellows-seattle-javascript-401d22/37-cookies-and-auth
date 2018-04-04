'use strict';

import reducers from '../reducers';
import thunk from './thunk';
import reporter from './reporter';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducers, applyMiddleware(thunk, reporter))
)

export default appCreateStore;