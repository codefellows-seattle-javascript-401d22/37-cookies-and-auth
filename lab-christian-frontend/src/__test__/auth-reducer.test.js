import authReducer from '../reducers/auth';

describe('Auth Reducer', function() {
  it('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });
});