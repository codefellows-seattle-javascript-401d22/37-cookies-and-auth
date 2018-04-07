import React, { Component } from 'react';
import {connect} from 'react-redux';

import { photoCreateRequest, photoFetchRequest } from '../../actions/photo-actions.js';
import { logError } from '../../lib/util.js';

import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';

class PhotoDashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  componentDidMount() {
    this.props.photoFetch()
      .catch(logError);
  }

  // handleSubmit(e) {
  //   this.props.onComplete
  // }

  render() {
    return (
      <section className='dashboard-container'>
        <PhotoForm
          buttonText='post'
          onComplete={photo => {
            return this.props.photoCreate(photo)
              .catch(console.errror);
          }}
        />

        {this.props.photos ? 
          this.props.photos.map( photo => {
            <PhotoItem 
              key={photo._id}
              photo={photo}
            />;
          }) : undefined }
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