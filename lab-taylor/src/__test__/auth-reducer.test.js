'use strict';

import authReducer from '../reducers/auth-reducer.js'

describe('Auth Reducer', () => {
  it('initial state should be null', () => {
    let result = authReducer(undefined, {type: null});
    expect(result).toEqual(null);
  });

  it('should return state if no action type is presented', () => {
    let state ={ username: 'testusername', email: 'sometest@email.com', password: '123456789'};
    let result = authReducer(state, {type: null});
    expect(result).toEqual(state);
  });

});
