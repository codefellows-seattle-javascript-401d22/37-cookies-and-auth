import superagent from 'superagent';
import { deleteCookie } from '../lib/util.js';

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const logout = () => {
  deleteCookie('X-Sluggram-Token');
  return { type: 'LOGOUT' };
};

export const signUpRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      try {
        localStorage.token = res.text;
      } catch (error) {
        console.log(error);
      }
      return res;
    });
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      return res;
    });
};