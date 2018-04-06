import superagent from 'superagent';

export const userprofileCreate = userprofile => ({
  type: 'USERPROFILE_CREATE',
  payload: userprofile,
});

export const userprofileUpdate = userprofile => ({
  type: 'USERPROFILE_UPDATE',
  payload: userprofile,
});

// async
export const userprofileCreateRequest = userprofile => (dispatch, getState) => {
  console.log('works 2');
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('bio', userprofile.bio)
    .attach('avatar', userprofile.avatar)
    .then( res => {
      dispatch(userprofileCreate(res.body));
      return res;
    });
};

export const userprofileUpdateRequest = userprofile => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.put(`${__API_URL__}/profiles/${userprofile._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('bio', userprofile.bio)
    .attach('avatar', userprofile.avatar)
    .then( res => {
      dispatch(userprofileUpdate(res.body));
      return res;
    });
};