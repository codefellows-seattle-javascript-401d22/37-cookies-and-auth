import superagent from 'superagent';
import * as util from '../lib/util.js';

export const signIn = token => ({
  type: 'SIGN_IN',
  payload: token,
});

export const signOut = () => {
  util.deleteCookie('X-Sluggram-Token');
  return { type: 'SIGN_OUT' };
};

// ASYNC
export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .withCredentials()
    .send(user)
    .then( res => {
      dispatch(signIn(res.text));
      try {
        localStorage.token = res.text;
      } catch (err) {
        console.error(err);
      }
      return res;
    });
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/signin`)
    .withCredentials()
    .auth(user.username, user.password)
    .then( res => {
      dispatch(signIn(res.text));
      return;
    });
};