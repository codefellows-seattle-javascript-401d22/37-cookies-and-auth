import { combineReducers } from 'redux';
import user from './user';
import userProfile from './user-profile';

export default combineReducers({
  user,
  userProfile,
});