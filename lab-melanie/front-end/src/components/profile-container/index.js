import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileForm from '../profile-form';
import { signUpRequest, loginRequest } from '../../actions/auth-actions.js';
import { profileCreateRequest, profileUpdateRequest } from '../../actions/profile-actions.js';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
      .then(() => this.props.history.push('/dashboard'))
      .catch(console.error);
  }

  handleProfileUpdate(profile) {
    return this.props.profileUpdate(profile)
      .catch(console.error);
  }

  render() {
    let handleComplete = this.props.profile
      ? this.handleProfileCreate
      : this.handleProfileUpdate;

    return (
      <section className='profile-container'>
        <ProfileForm
          profile={this.props.profile}
          buttonText='create profile'
          onComplete={handleComplete}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(profileCreateRequest(profile)),
  profileUpdate: profile => dispatch(profileUpdateRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);