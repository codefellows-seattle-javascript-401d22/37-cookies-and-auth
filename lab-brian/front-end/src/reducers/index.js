import { combineReducers } from 'redux';
import userAuth from './user-auth';
import userprofile from './user-profile';
import userGalleryItems from './user-gallery';

export default combineReducers({
  userAuth,
  userprofile,
  userGalleryItems,
});