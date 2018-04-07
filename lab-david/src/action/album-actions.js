'use strict';

import superagent from 'superagent';
import * as util from '../lib/util.js';

export const albumFetchAllUser = albums => ({
  type: 'ALBUM_FETCH_USER',
  payload: albums,
})

export const albumCreate = album => ({
  type: 'ALBUM_CREATE',
  payload: album,
})

export const albumUpdate = album => ({
  type: 'ALBUM_UPDATE',
  payload: album,
})

export const albumDelete = album => ({
  type: 'ALBUM_DELETE',
  payload: album,
})

export const albumFetchAllUserRequest = (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/api/photoalbum/user/me`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(albumFetchAllUser(res.body));
      return res;
    })
}

export const albumCreateRequest = album => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/api/photoalbum`)
    .set('Authorization', `Bearer ${auth}`)
    .send(album)
    .then( res => {
      dispatch(albumCreate(res.body));
      return res;
    })
}

export const albumUpdateRequest = album => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.put(`${__API_URL__}/api/photoalbum/${album._id}`)
    .set('Authorization', `Bearer ${auth}`)
    .send(album)
    .then( res => {
      dispatch(albumUpdate(res.body));
      return res;
    })
}

export const albumDeleteRequest = album => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.delete(`${__API_URL__}/api/photoalbum/${album._id}`)
    .set('Authorization', `Bearer ${auth}`)
    .then( res => {
      dispatch(albumDelete(res.body));
      return res;
    })
}