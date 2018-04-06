import React from 'react';
import * as util from '../../lib/util';

class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userprofile ? {...props.userprofile, preview: ''} : { bio: '', avatar: null, preview: ''};
  }

  componentWillReceiveProps(props) {
    if(props.userprofile) {
      this.setState(props.userprofile);
    }
  }

  handleChange(e) {
    let [type, name] = e.target;
    if(name === 'bio') {
      this.setState({ bio: e.target.value });
    }
    if(name === 'avatar') {
      let { files } = e.target;
      console.log('FILES: ', files);
      let avatar = files[0];
      this.setState({avatar});
      util.photoToDataURL(avatar)
        .then(preview => this.setState({preview}))
        .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className='userprofile-form' onSubmit={this.handleSubmit}>
        <img src={this.state.preview} />

        <input 
          type='file'
          name='avatar'
          onChange={this.handleChange}
        />

        <textarea 
          type='text'
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}>
        </textarea>

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default UserProfileForm;