'use strict';

import call from 'superagent';

export const profileCreate = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile,
})

export const profileUpdate = (profile) => ({
  type: 'PROFILE_UPDATE',
  paylaod: profile,
})

export const profileDelete = (profile) => ({
  type: 'PROFILE_DELETE',
  payload: profile,
})

export const profileCreateRequest = (profile) => (dispatch, getState) => {
  let { auth } = getState();
  return call.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then( res => {
    dispatch(profileCreate(res.body));
    return res;
  })

}