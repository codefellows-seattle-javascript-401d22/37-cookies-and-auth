let validateUserGalleyItem = userGalleryItem => {
  if(!userGalleryItem._id || !userGalleryItem.url || !userGalleryItem.description || !userGalleryItem.owner || !userGalleryItem.profile) {
    throw new Error('VALIDATION ERROR: userGalleryItem requires a photo, description and logged in user with a userprofile.');
  }
};

export default (state=[], action) => {
  let { type, payload } = action;

  switch(type) {
    case 'USER_GALLERY_ITEMS_FETCH':
      return payload;
    case 'USER_GALLERY_ITEM_CREATE':
      validateUserGalleyItem(payload);
      return [payload, ...state];
    case 'USER_GALLERY_ITEM_UPDATE':
      if(state === []) throw new Error('USAGE ERROR: can not update when usergalleryitem is empty');
      validateUserGalleyItem(payload);
      return state.map(userGalleryItem => userGalleryItem._id === payload._id ? payload : userGalleryItem);
    case 'USER_GALLERY_ITEM_DELETE':
      if(state === []) throw new Error('USAGE ERROR: can not update when usergalleryitem is empty');
      validateUserGalleyItem(payload);
      return state.filter(userGalleryItem => userGalleryItem._id !== payload._id);
    case 'SIGN_OUT':
      return [];
    default:
      return state;
  }
};