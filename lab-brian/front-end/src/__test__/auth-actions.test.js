import { tokenSet, tokenDelete, signupRequest, loginRequest } from '../actions/userAuth-actions.js';
import superagent from 'superagent';

const randomNum = max => {
  return Math.floor(Math.random()* max);
};

const mockUser = {
  username: `testname${randomNum(5000)}`,
  email: `testemail${randomNum(1000)}@email.net`,
  password: '1234512345',
};

describe('Auth actions', () => {
  let tempUser;

  test('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action).toEqual({
      'payload': {'token': '12345'}, 'type': 'TOKEN_SET'}
    );
  });

  test('tokenDelete should return a TOKEN_DELETE action', () => {
    let action = tokenDelete({ token: '12345' });
    expect(action).toEqual({'type': 'TOKEN_DELETE'});
  });

  // ASYNC
  test('signup req should return a token', done => {
    superagent.post('http://localhost:3000/signup')
      .send(mockUser)
      .end((err, res) => {
        if(err) return done(err);
        expect(res.text).toBeTruthy();
        expect(typeof res.text).toEqual('string');
        expect(err).toEqual(null);
        console.log('::::::::::::res.text:::::::', res.text);
        tempUser = mockUser;
        done();
      });
  });

  test('login req should return a token', done => {
    superagent.get('http://localhost:3000/signin')
      .auth(tempUser.username, tempUser.password)
      .end((err, res) => {
        if(err) return done(err);
        expect(res.text).toBeTruthy();
        expect(typeof res.text).toEqual('string');
        expect(err).toEqual(null);
        console.log('::::::::::::res.text:::::::', res.text);
        done();
      });
  });
});