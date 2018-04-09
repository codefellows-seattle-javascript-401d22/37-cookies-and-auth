import React from 'react';

class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userprofile ? {...props.userprofile} : { bio: '', avatar: null };
  }

  componentWillReceiveProps(props) {
    if (props.userprofile) {
      this.setState(props.userprofile);
    }
  }

  handleChange = e => {
    let { type, name } = e.target;

    if (name === 'bio') {
      this.setState({ bio: e.target.value });
    }
    
    if (name === 'avatar') {
      let { files } = e.target;
      console.log('FILES:', files);
      let avatar = files[0];
      this.setState({ avatar });
      this.props.onAvatarSelect(avatar);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handlesubmit: ', this.state);
    return this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className='userprofile-form' onSubmit={this.handleSubmit}>

        <input 
          type='file'
          name='avatar'
          onChange={this.handleChange}
        />

        <textarea 
          type='text'
          name='bio'
          placeholder='tell us about yourself...'
          value={this.state.bio}
          onChange={this.handleChange}>
        </textarea>

        <button type='submit' className='darkButton'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default UserProfileForm;