import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileForm from '../profile-form';
import { signUpRequest, signinRequest } from '../../actions/auth-actions.js';
import { profileCreateRequest, profileUpdateRequest } from '../../actions/profile-actions.js';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { editProfileMode: false };
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
    let { profile } = this.props;
    let handleComplete = this.props.profile === null
      ? this.handleProfileCreate
      : this.handleProfileUpdate;

    return (
      <section className='profile-page'>
        {this.props.profile && !this.state.editProfileMode ?
          <div className='profile-container-noedit'>
            <h2>welcome back, {profile.username}</h2>
            <img src={profile.avatar} />
            <p><span>Username:</span> {profile.username}</p>
            <p><span>Email:</span> {profile.email}</p>
            <p><span>Bio:</span> {profile.bio}</p>
            <button onClick={() => this.setState({ editProfileMode: true })}>edit profile</button>
          </div>
          : undefined}

        {this.props.profile && this.state.editProfileMode ?
          <div className='profile-container-edit'>
            <ProfileForm
              headerText='update your profile'
              profile={this.props.profile}
              buttonText='update profile'
              onComplete={handleComplete}
            />
          </div>
          : undefined}

        {!this.props.profile ?
          <div className='profile-container'>
            <ProfileForm
              headerText='create a profile'
              profile={this.props.profile}
              buttonText='create profile'
              onComplete={handleComplete}
            />
          </div>
          : undefined }
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