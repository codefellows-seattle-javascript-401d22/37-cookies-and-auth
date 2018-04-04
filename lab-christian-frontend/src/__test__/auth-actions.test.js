import {tokenSet, signupRequest, loginRequest} from '../actions/auth-actions';
import request from 'superagent';

const randomNumber = max => {
  return Math.floor(Math.random() * max);
}

const mockUser = {
  username: `testingit${randomNumber(1000)}`,
  email: `testingit${randomNumber(1000)}@email.net`,
  password: '123456789',
}

describe('Auth Actions', function() {
  let tempUser;
  
  it('tokenSet should return a TOKEN_SET action', () => {
    let action = tokenSet({ token: '12345' });
    expect(action.type).toEqual('TOKEN_SET');
    expect(action.payload).toEqual('12345');
    expect(action.payload.token).toBeTruthy();
  });

  it('tokenDelete should return a tokenDelete action', () => {
    let token = '12345';
    let action = tokenDelete(token);
    expect(action).toEqual({ type: 'TOKEN_DELETE' });
  });

  it('signupRequest should return a token', done => {
    request.post('http://localhost:3000/signup')
      .send(mockUser)
      .end((err, res) => {
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
    request.get('http://localhost:3000/login')
      .auth(tempUser.username, tempUser.password)
      .end((err, res) => {
        if(err) return done(err);
        expect(res.text).toBeTruthy();
        expect(typeof res.text).toEqual('string');
        expect(err).toEqual(null);
        console.log('login:::::', tempUser);
        done();
      });
  });
});

