import superagent from 'superagent';

export const userprofileCreate = userprofile => ({
  type: 'USERPROFILE_CREATE',
  payload: userprofile,
});

export const userprofileUpdate = userprofile => ({
  type: 'USERPROFILE_UPDATE',
  payload: userprofile,
});

export const userprofileCreateRequest = userprofile => (dispatch, getState) => {
  let { auth } = getState();
  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${auth}`)
    .field('bio', userprofile.bio)
    .attach('avatar', userprofile.avatar)
    .then( res => {
      dispatch(userprofileCreate(res.body));
      return res;
    });
};