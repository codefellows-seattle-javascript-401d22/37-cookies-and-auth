'use strict';

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
    case 'ALBUM_FETCH_USER':
      return payload;
    case 'ALBUM_CREATE':
      return [payload, ...state];
    case 'ALBUM_UPDATE':
      return state.map(album => album._id === payload._id ? payload : album);
    case 'ALBUM_DELETE':
      return state.filter(album => album._id !== payload._id);
    default:
      return state;
  }
}