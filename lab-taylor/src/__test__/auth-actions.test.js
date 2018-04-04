'use strict';

import { tokenSet, tokenDelete, signupRequest, loginRequest } from '../actions/auth-actions.js';
import call from 'superagent';
require('jest');

const randomNum = max => {
  return Math.floor(Math.random() * max);
}

const mockUser = {
  username: `someuser${randomNum(1000)}`,
  email: `someuser${randomNum(1000)}`,
  password: '123456789'
}

describe('Auth Actions', () => {
  let tempUser;

  it('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toBeTruthy();
    expect(action.payload.token).toEqual('12345');
  })
})