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

  test('the payload should be returns if type is TOKEN_SET', () => {
    let state = { username: 'testusername', email: 'testemail@email.com', password: '2468101214' };
    let shipment = { username: 'newtestname', email: 'thingone@thingtwo.com', password: '123456789'};
    let result = authReducer(state, {type: 'TOKEN_SET', payload: shipment});
    expect(result).toEqual(shipment);
  });
});