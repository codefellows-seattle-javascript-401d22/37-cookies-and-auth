import reducers from '../reducers';
import thunk from './redux-thunk.js';
import reporter from './redux-reporter.js';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducers, applyMiddleware(thunk, reporter))
);

export default appCreateStore;