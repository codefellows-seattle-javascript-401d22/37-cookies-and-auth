import superagent from 'superagent';
import { tokenSet, logout, signUpRequest, signinRequest } from '../actions/auth-actions.js';
import { mockUser } from './lib/mock-data.js';

describe('Auth Actions', () => {
  let tempUser;

  test('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toBeTruthy();
    expect(action.payload.token).toEqual('12345');
  });

  test('logout should return a LOGOUT action', () => {
    let token = '12345';
    let action = logout();
    expect(action.type).toEqual('LOGOUT');
  });

  test('signupRequest should return a token', done => {
    superagent.post('http://localhost:3000/signup')
      .send(mockUser)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toBeTruthy();
        expect(typeof res.text).toEqual('string');
        expect(err).toEqual(null);
        tempUser = mockUser;
        console.log('__JEST_SIGNUP__:', tempUser);
        done();
      });
  });

  test('signinRequest should return a token', done => {
    superagent.get('http://localhost:3000/login')
      .auth(tempUser.username, tempUser.password)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).toBeTruthy();
        expect(typeof res.text).toEqual('string');
        expect(err).toEqual(null);
        tempUser = mockUser;
        console.log('__JEST_signin__:', tempUser);
        done();
      });
  });
});