import React from 'react';
import { connect } from 'react-redux';
import UserProfileForm from '../userProfile-form';
import { userprofileCreateRequest, userprofileUpdateRequest } from '../../actions/userProfile-actions.js';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUserprofileCreate = userprofile => {
    console.log('user profile create works');
    return this.props.userprofileCreate(userprofile)
      .then( () => {
        console.log('userprofile created: ');
        this.props.history.push('/gallery');
      })
      .catch(console.error);
  };

  handleUserprofileUpdate = userprofile => {
    console.log('user profile update works');
    return this.props.userprofileUpdate(userprofile)
      .then( () => {
        console.log('userprofile created: ', res);
        this.props.history.push('/gallery');
      })
      .catch(console.error);
  };

  render() {
    let handleComplete = !this.props.userprofile ? this.handleUserprofileCreate : this.handleUserprofileUpdate;

    return(
      <section className='profile-container'>
        <h2> Profile Settings: </h2>
        <UserProfileForm 
          userprofile={this.props.userprofile}
          buttonText='create profile'
          onComplete={handleComplete}
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
  userprofileUpdate: userprofile => dispatch(userprofileUpdateRequest(userprofile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);