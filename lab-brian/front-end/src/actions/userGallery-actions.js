import superagent from 'superagent';

export const userGalleryItemsFetch = userGalleryItems => ({
  type: 'USER_GALLERY_ITEMS_FETCH',
  payload: userGalleryItems,
});

export const userGalleryItemCreate = userGalleryItem => ({
  type: 'USER_GALLERY_ITEM_CREATE',
  payload: userGalleryItem,
});

export const userGalleryItemUpdate = userGalleryItem => ({
  type: 'USER_GALLERY_ITEM_UPDATE',
  payload: userGalleryItem,
});

export const userGalleryItemDelete = userGalleryItem => ({
  type: 'USER_GALLERY_ITEM_DELETE',
  payload: userGalleryItem,
});

// ASYNC
export const userGalleryItemsFetchRequest = () => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.get(`${__API_URL__}/photos/me`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(userGalleryItemsFetch(res.body.data));
      return res;
    });
};

export const userGalleryItemCreateRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('description', userGalleryItem.description)
    .attach('photo', userGalleryItem.photo)
    .then(res => {
      dispatch(userGalleryItemCreate(res.body));
      return res;
    });
};

export const userGalleryItemDeleteRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.delete(`${__API_URL__}/photos/${userGalleryItem._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .then(res => {
      dispatch(userGalleryItemDelete(userGalleryItem));
      return res;
    });
};

export const userGalleryItemUpdateRequest = userGalleryItem => (dispatch, getState) => {
  let { userAuth } = getState();
  return superagent.put(`${__API_URL__}/photos/${userGalleryItem._id}`)
    .set('Authorization', `Bearer ${userAuth}`)
    .field('description', userGalleryItem.description)
    .attach('photo', userGalleryItem.photo)
    .then(res => {
      dispatch(userGalleryItemUpdate(res.body));
      return res;
    });
};