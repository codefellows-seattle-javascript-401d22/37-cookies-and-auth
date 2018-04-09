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
  });

  it('tokenDelete should return a tokenDelete action', () => {
    let token = '12345';
    let action = tokenDelete(token);
    expect(action).toEqual({type: 'TOKEN_DELETE'})
  });
  
  it('signupRequest should return a token', done => {
    call.post('http://localhost:3000/signup')
    .send(mockUser)
    .end( (err, res) => {
      if(err) return done(err);
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      tempUser = mockUser;
      console.log('signup::::', tempUser);
      done();
    });
  });
  
  it('loginRequest should return a token', done => {
    call.get('http://localhost:3000/login')
    .auth(tempUser.username, tempUser.password)
    .end((err, res) => {
      if(err) return done(err);
      expect(res.text).toBeTruthy();
      expect(typeof res.text).toEqual('string');
      expect(err).toEqual(null);
      console.log('login::::', tempUser);
      done();
    });
  });
});