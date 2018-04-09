let validateProfile = profile => {
  if (!profile.avatar || !profile.bio || !profile.owner || !profile.username || !profile.email) {
    throw new Error('__VALIDATION ERROR__: profile missing information');
  }
};

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'PROFILE_CREATE':
    validateProfile(payload);
    return payload;
  case 'PROFILE_UPDATE':
    validateProfile(payload);
    return {...state, ...payload};
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};