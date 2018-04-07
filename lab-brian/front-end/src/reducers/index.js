import { combineReducers } from 'redux';
import userAuth from './user-auth';
import userProfile from './user-profile';
import userGallery from './user-gallery';

export default combineReducers({
  userAuth,
  userProfile,
  userGallery,
});