import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileCreateRequest } from '../../actions/profile-actions.js';
import ProfileForm from '../profile-form';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  handleProfileCreate(profile) {
    return this.props.profileCreate(profile)
      .then(res => console.log('profile created', res.text))
      .catch(console.error);
  }

  handleProfileUpdate() {
    // to complete later
  }

  render() {
    let handleComplete = this.props.profile
      ? this.handleProfileCreate
      : this.handleProfileUpdate;

    return (
      <section className='profile-container'>
        <ProfileForm
          buttonText='create profile'
          onComplete={this.handleProfileCreate}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);