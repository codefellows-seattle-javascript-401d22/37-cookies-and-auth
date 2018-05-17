import reducer from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const appCreateStore = () => (
  createStore(reducer, applyMiddleware( createLogger(), thunk, reporter ))
);

export default appCreateStore;