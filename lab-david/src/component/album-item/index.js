'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {albumDeleteRequest} from '../../action/album-actions.js';

class AlbumItem extends React.Component{
  render(){
    let {album, albumDelete} = this.props;
    return(
      <section className='album-item'>
        <div className='content'>
          <h2>{album.name}</h2>
          <p>{album.desc}</p>
          <p>Created: {album.created}</p>
          <button onClick={() => albumDelete(album)}>X</button>
        </div>
      </section>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  albumDelete: album => dispatch(albumDeleteRequest(album)),
})

export default connect(null, mapDispatchToProps)(AlbumItem);