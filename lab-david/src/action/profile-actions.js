'use strict';

import superagent from 'superagent';

export const profleCreate = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile,
})

export const profileUpdate = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile
})

export const profileDelete = profile => ({
  type: 'PROFILE_DELETE',
  payload: profile
})

export const profileCreateRequest = profile => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${auth}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then( res => {
      dispatch(profileCreate(res.body));
      return res;
    })
}