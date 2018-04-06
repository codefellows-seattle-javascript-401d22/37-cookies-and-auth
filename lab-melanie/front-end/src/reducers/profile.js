export default (state=null, action) => {
  let { type, payload } = action;
  // TO DO: Add validation

  switch(type) {
  case 'PROFILE_CREATE':
    return payload;
  case 'PROFILE_UPDATE':
    return {...state, ...payload};
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};