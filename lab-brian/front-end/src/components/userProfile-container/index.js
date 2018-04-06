import React from 'react';
import { connect } from 'react-redux';
import UserProfileForm from '../userProfile-form';
import { userprofileCreateRequest } from '../../actions/userProfile-actions.js';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUserprofileCreate = userprofile => {
    console.log('works');
    return this.props.userprofileCreate(userprofile)
      .then( res => {
        console.log('userprofile created: ', res);
      })
      .catch(console.error);
  }

  handleUserprofileUpdate = () => {}

  render() {
    let handleComplete = !this.props.userprofile ? this.handleUserprofileCreate : this.handleUserprofileUpdate;

    return(
      <section className='profile-container'>
        <h2> Profile Settings: </h2>
        <UserProfileForm 
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);