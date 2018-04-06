export default (state=null, action) => {
  let {type, payload } = action;

  switch(type) {
    case 'USERPROFILE_UPDATE':
      return payload;
    case 'USERPROFILE_CREATE':
      return {...state, ...payload};
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};