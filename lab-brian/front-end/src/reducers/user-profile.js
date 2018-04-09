let validateUserProfile = userprofile => {
  if((!userprofile.avatar && !userprofile.bio) || !userprofile._id 
    || !userprofile.owner || !userprofile.username || !userprofile.email){
    throw  new Error('VALIDATION ERROR: userprofile requires a photo or bio');
  }
};

export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'USERPROFILE_UPDATE':
      if(!state) throw new Error('USAGE ERROR: can not update when userprofile is null');
      validateUserProfile(payload);
      return {...state, ...payload};
    case 'USERPROFILE_CREATE':
      validateUserProfile(payload);
      return payload;
    case 'USERPROFILE_FETCH':
      validateUserProfile(payload);
      return payload;
    case 'USERPROFILE_RESET':
      return null;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
};