import React from 'react';
import { connect } from 'react-redux';

import Avatar from '../avatar';
import * as util from '../../lib/util.js';
import UserProfileForm from '../userProfile-form';
import { userprofileCreateRequest, userprofileUpdateRequest } from '../../actions/userProfile-actions.js';

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.userprofile ? {...props.userprofile, avatarpreview: ''} : { avatarpreview: ''};
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
        this.props.history.push('/gallery');
      })
      .catch(console.error);
  };

  handleAvatarSelect = avatar => {
    util.photoToDataURL(avatar)
    .then(avatarpreview => this.setState({ avatarpreview }))
    .catch(console.error);
  }

  render() {
    let handleComplete = !this.props.userprofile ? this.handleUserprofileCreate : this.handleUserprofileUpdate;

    let buttonText = !this.props.userprofile ? 'create' : 'update';

    return(
      <section className='profile-container'>
        <h2 className='title'> create a profile.

          {util.renderIf(this.state.avatarpreview,
            <div className='avatarDiv'>
              <div className='avatar'>
                <img src={ this.state.avatarpreview  } />
              </div>
            </div>
          )}

          {util.renderIf(!this.state.avatarpreview && this.props.userprofile,
            <div className='avatarDiv'>
              <Avatar userprofile={this.props.userprofile} />
            </div>
          )}

        </h2>

        <UserProfileForm 
          userprofile={this.props.userprofile}
          buttonText={buttonText}
          onComplete={handleComplete}
          onAvatarSelect={this.handleAvatarSelect}
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