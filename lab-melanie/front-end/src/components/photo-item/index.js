import React, { Component } from 'react';
import { connect } from 'react-redux';

import { photoDeleteRequest, photoUpdateRequest } from '../../actions/photo-actions.js';
import PhotoForm from '../photo-form';

class PhotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    return this.props.deletePhoto(this.props.photo)
      .then(console.log)
      .catch(console.error);
  }

  handleUpdate(photo) {
    return this.props.updatePhoto(photo)
      .then(() => this.setState({ editMode: !this.state.editMode }))
      .catch(console.error);
  }

  render() {
    let { photo } = this.props;

    let pencilData = require('../../assets/icons/pencil.icon.svg');
    let pencilInnerHtml = {__html: pencilData};

    let trashData = require('../../assets/icons/trash.icon.svg');
    let trashInnerHtml = {__html: trashData};

    return (
      <div>
        {this.state.editMode ? 
          <PhotoForm 
            photo={photo}
            buttonText='update photo'
            onComplete={this.handleUpdate}
            className='photo-form-edit'
          />
          : undefined }

        <section className='display-photo'>
          <img src={photo.url} />
          <div className='photo-details'>
            <p>{photo.description}</p>
            <div className='photo-controls'>
              <a onClick={() => this.setState({ editMode: !this.state.editMode })}>
                <div className='pencil-icon' dangerouslySetInnerHTML={pencilInnerHtml}></div>
              </a>
              <a onClick={this.handleDelete}>
                <div className='trash-icon' dangerouslySetInnerHTML={trashInnerHtml}></div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deletePhoto: photo => dispatch(photoDeleteRequest(photo)),
  updatePhoto: photo => dispatch(photoUpdateRequest(photo)),
});

export default connect(null, mapDispatchToProps)(PhotoItem);