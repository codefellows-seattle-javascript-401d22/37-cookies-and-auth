'use strict';

import authReducer from '../reducer/auth-reducer.js';

describe('Auth Reducer', () => {
  test('initial state should be null', () => {
    let result = authReducer(undefined, { type: null});
    expect(result).toEqual(null);
  });

  test('the state should be returned if no action type is presented', () => {
    let state = { username: 'testusername', email: 'testemail@email.com', password: '2468101214' };
    let result = authReducer(state, {type: null});
    expect(result).toEqual(state);
  });
});