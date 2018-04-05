export default (state=null, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'USERPROFILE_CREATE':
      return payload;
    case 'USERPROFILE_UPDATE':
      return {...state, ...payload};
    case 'SIGN_OUT':
      return null;
    default: 
      return state;
  }
};