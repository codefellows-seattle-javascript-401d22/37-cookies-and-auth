import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoForm from '../photo-form';

class PhotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false }; // toggle edit mode
    // TO DO: ADD UPDATE & DELETE
  }

  render() {
    return (
      <PhotoForm />
    );
  }
};

// TO DO: map state, map dispatch, etc