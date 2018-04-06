import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import {profileCreateRequest, profileUpdateRequest} from '../../action/profile-actions.js';

class SettingsContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      profileCreated: false,
    }

    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
      .then( res => {
        this.setState({ profileCreated: true });
      })
      .catch(console.error);
  }

  handleProfileUpdate(profile) {
    return this.props.profileUpdate(profile)
      .then( res => {
        console.log('profile updated:', res);
      })
      .catch(console.error);
  }

  render() {
    let handleComplete = this.props.profile ? this.handleProfileCreate : this.handleProfileUpdate;
    // so if the props.profile does exist then this container does handleProfileCreate???
    let buttonText = this.state.profileCreated ? 'Update Profile' : 'Create Profile';

    return (
      <section className='settings-container'>
        <h2>Profile Settings:</h2>
        <ProfileForm
          buttonText={buttonText}
          onComplete={this.state.profileCreated ? this.handleProfileUpdate : this.handleProfileCreate} />
      </section>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(profileCreateRequest(profile)),
  profileUpdate: (profile) => dispatch(profileUpdateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);