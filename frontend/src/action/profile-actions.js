import superagent from 'superagent';

export const profileCreate = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile
});

export const profileUpdate = (profile) => ({
  type: 'PROFILE_UPDATE',
  payload: profile
});

export const profileCreateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${auth}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then( res => {
      dispatch(profileCreate(res.body));
      return res;
    });
}

export const profileUpdateRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  let owner = getState().profile.owner;
  console.log('getstate', getState())
  console.log(':::profile', profile);

  return superagent.put(`${__API_URL__}/profiles/${owner}`)
    .set('Authorization', `Bearer ${auth}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then( res => {
      dispatch(profileUpdate({...profile}));
      return res;
    })
}