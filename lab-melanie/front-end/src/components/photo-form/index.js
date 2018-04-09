import React, { Component } from 'react';
import { photoToDataUrl } from '../../lib/util.js';

export default class PhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.photo
      ? props.photo
      : { description: '', preview: '', photo: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name } = e.target;

    if (name === 'description') {
      this.setState({ description: e.target.value });
    }

    if (name === 'photo') {
      let { files } = e.target;
      let photo = files[0];
      this.setState({ photo });
      photoToDataUrl(photo)
        .then(preview => this.setState({ preview }))
        .catch(console.error);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    
    return this.props.onComplete(this.state)
      .then( () => {
        if (!this.props.profile) {
          this.setState({ description: '', preview: '', photo: null });
        }
      })
      .catch(console.error);
  }
  
  render() {
    return (
      <form className='photo-form' onSubmit={this.handleSubmit}>
        {this.state.preview ? 
          <img 
            className='img-preview'
            src={this.state.preview || this.state.url || '' }
          />
          : undefined }

        <input
          name='photo'
          type='file'
          onChange={this.handleChange}
        />

        <input
          name='description'
          placeholder='description'
          type='text'
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}