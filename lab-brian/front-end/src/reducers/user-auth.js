export default (state=null, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'TOKEN_SET':
      console.log('payload: ', payload);
      return payload;
    case 'TOKEN_DELETE':
      console.log('payload: ', payload);
      return null;
    default:
      return state;
  }
};