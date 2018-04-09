'use strict';

import {combineReducers} from 'redux';
import auth from './auth-reducer.js';
import profile from './profile-reducer.js';
import album from './album-reducer.js';

export default combineReducers({
  auth,
  profile,
  album,
})