import authReducer from '../reducers/auth';

describe('Auth Reducer', function() {
  it('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });

  it('the state should be returned if no action type is provided', () => {
    let state = { username: 'testusername', email: 'testemail@test.com', password: '123456789' };
    let result = authReducer(state, { type: null });
    expect(result).toEqual(state);
  });
});