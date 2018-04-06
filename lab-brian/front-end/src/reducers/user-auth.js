export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SIGN_IN':
      console.log('payload: ', payload);
      return payload;
    case 'SIGN_OUT':
      console.log('payload: ', payload);
      return null;
    default:
      return state;
  }
};