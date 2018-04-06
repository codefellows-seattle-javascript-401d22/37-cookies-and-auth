import superagent from 'superagent';

export const userprofileCreate = userprofile => ({
  type: 'USERPROFILE_CREATE',
  payload: userprofile,
});

export const userprofileUpdate = userprofile => ({
  type: 'USERPROFILE_UPDATE',
  payload: userprofile,
});

export const userprofileFetch = userprofile => ({
  type: 'USERPROFILE_FETCH',
  payload: userprofile,
});

export const userprofileReset = () => ({
  type: 'USERPROFILE_RESET',
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

export const userprofileFetchRequest = () => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/profiles/me`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(userprofileFetch(res.body));
      return res;
    });
};

export const userprofileResetRequest = userprofile => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.delete(`${__API_URL__}/profiles/${userprofile._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then( res => {
      dispatch(userprofileReset(userprofile));
      return res;
    });
};