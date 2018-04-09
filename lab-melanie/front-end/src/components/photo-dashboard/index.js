import React, { Component } from 'react';
import {connect} from 'react-redux';

import { photoCreateRequest, photoFetchRequest } from '../../actions/photo-actions.js';
import { logError } from '../../lib/util.js';

import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';

class PhotoDashboard extends Component {
  componentDidMount() {
    this.props.photoFetch()
      .catch(logError);
  }

  render() {
    return (
      <section className='photo-dashboard'>
        <h2>gallery</h2>
        <PhotoForm
          buttonText='post'
          onComplete={photo => {
            return this.props.photoCreate(photo)
              .catch(console.errror);
          }}
          className='photo-form'
        />

        {this.props.photos.length > 0 ? 
          this.props.photos.map(photo => 
            <PhotoItem 
              key={photo._id}
              photo={photo}
            />
          ) : undefined }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  photoCreate: photo => dispatch(photoCreateRequest(photo)),
  photoFetch: photo => dispatch(photoFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDashboard);