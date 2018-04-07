import React from 'react';
import * as util from '../../lib/util.js';

class UserGalleryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.userGalleryItem ? this.props.userGalleryItem : { description: '', preview: '', photo: null };
  }

  handleChange = e => {
    console.log('event: ', e.target);
    let { name } = e.target;
    if(name === 'description') {
      this.setState({ description: e.target.value });
    }
    if(name === 'photo') {
      let { files } = e.target;
      let photo = files[0];
      this.setState({ photo });
      util.photoToDataURL(photo)
        .then( preview => this.setState({ preview }))
        .catch(console.error);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    return this.props.onComplete(this.state)
      .then( () => {
        if(!this.props.userprofile){
          this.setState({ description: '', preview: '', photo: null });
        }
      });
  };

  render(){
    return (
      <form className='userGalleryItem-form' onSubmit={this.handleSubmit}>
        {util.renderIf(this.state.preview,
          <img className='galleryItem-preview' src={this.state.preview || this.state.url || '' } />
        )}

        <input 
          name='photo'
          type='file'
          onChange={this.handleChange}
        />

        <input 
          name='description'
          type='text'
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default UserGalleryForm;