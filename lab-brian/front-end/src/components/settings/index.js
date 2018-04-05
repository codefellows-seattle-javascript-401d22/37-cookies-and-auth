import React from 'react';
import { connect } from 'react-redux';
import UserProfileForm from '../userprofile-form';
import { userprofileCreateRequest } from '../../actions/userprofile-actions.js';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUserprofileCreate = userprofile => {
    return this.props.userprofileCreate(userprofile)
      .then( res => {
        console.log('profile created: ', res);
      })
      .catch(console.error);
  };

  handleUserprofileUpdate() {}

  render() {
    let handleComplete = this.props.userprofile ? this.handleUserprofileCreate : this.handleUserprofileUpdate;
    return (
      <section className='settings'>
        <h2>Profile Settings:</h2>
        <UserProfileForm
          buttonText='create profile'
          onComplete={this.handleUserprofileCreate}
        />
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => ({
  userprofileCreate: userprofile => dispatch(userprofileCreateRequest(userprofile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);