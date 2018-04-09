'use stict';

import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import {albumCreateRequest, albumFetchAllUserRequest} from '../../action/album-actions.js';
import AlbumForm from '../album-form';
import AlbumItem from '../album-item';

class DashboardSection extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.albumFetchAllUser()
      .catch(util.logError);
  }

  componentWillReceiveProps(props){
    if(this.props.userAlbums){

    }
  }

  render(){
    return(
      <section className='dashboard-section'>
        <AlbumForm
          buttonText='Create Gallery'
          onComplete={this.props.albumCreate} />
        {this.props.userAlbums.map(album => {
          <AlbumItem
            key={album._id}
            album={album} />
        })}
      </section>
    )
  }
}

let mapStateToProps = state => ({
  userAlbums: state.album
})

let mapDispatchToProps = dispatch => ({
  albumCreate: album => dispatch(albumCreateRequest(album)),
  albumFetchAllUser: () => dispatch(albumFetchAllUserRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSection);