import { combineReducers } from 'redux';
import userAuth from './user-auth';
import userProfile from './user-profile';

export default combineReducers({
  userAuth,
  userProfile,
});