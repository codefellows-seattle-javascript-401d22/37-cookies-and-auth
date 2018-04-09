import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import Avatar from '../avatar';
import { userGalleryItemsFetchRequest, userGalleryItemCreateRequest } from '../../actions/userGallery-actions.js';
import { signOut } from '../../actions/userAuth-actions.js';

import UserGalleryForm from '../userGallery-form';
import UserGalleryItem from '../userGallery-item';

class UserGalleryContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.userGalleryItemsFetch()
      .catch(util.logError);
  }

  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push('/user/signin');
  };

  render(){
    return (
      <div className='userGallery-container'>
      
        {util.renderIf(this.props.userprofile,
          <div className='avatarDiv'>
            <Avatar userprofile={this.props.userprofile} />
            <p className='logout' onClick={this.handleSignOut}>logout</p>
          </div>
        )}

        <h2 className='title'>gallery. </h2>
        <UserGalleryForm 
          buttonText='post'
          onComplete={userGalleryItem => {
            return this.props.userGalleryItemCreate(userGalleryItem)
              .catch(console.error);
          }}
        />
        
        {this.props.userGalleryItems.map(userGalleryItem =>
          <UserGalleryItem key={userGalleryItem._id} userGalleryItem={userGalleryItem} />
        )}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  userprofile: state.userprofile,
  userGalleryItems: state.userGalleryItems,
});

let mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  userGalleryItemsFetch: () => dispatch(userGalleryItemsFetchRequest()),
  userGalleryItemCreate: userGalleryItem => dispatch(userGalleryItemCreateRequest(userGalleryItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserGalleryContainer);