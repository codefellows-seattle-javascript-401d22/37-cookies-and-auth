import superagent from 'superagent';
import { profileCreate, profileCreateRequest } from '../actions/profile-actions.js';
import { mockUser, mockProfile } from './lib/mock-data.js';

describe('Profile Actions', () => {
  test('profileCreate should return a PROFILE_CREATE action', () => {
    let action = profileCreate(mockProfile);
    expect(action.type).toEqual('PROFILE_CREATE');
    expect(action.payload).toBeTruthy();
    expect(action.payload.avatar).toEqual(mockProfile.avatar);
    expect(action.payload.bio).toEqual(mockProfile.bio);
    expect(action.payload.email).toEqual(mockProfile.email);
    expect(action.payload.username).toEqual(mockProfile.username);
  });
});