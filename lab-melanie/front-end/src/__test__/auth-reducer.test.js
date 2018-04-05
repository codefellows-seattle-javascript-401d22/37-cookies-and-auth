import authReducer from '../reducers/auth.js';
import { mockUser } from './lib/mock-data.js';

describe('Auth Reducer', () => {
  test('initial state should be null', () => {
    let result = authReducer(undefined, { type: null });
    expect(result).toEqual(null);
  });

  test('state should be returned if action type is not present', () => {
    let result = authReducer(mockUser, { type: null });
    expect(result).toEqual(mockUser);
  });
});