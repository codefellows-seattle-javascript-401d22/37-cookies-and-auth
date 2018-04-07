import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import { userGalleryItemsFetchRequest, userGalleryItemCreateRequest } from '../../actions/userGallery-actions.js';

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

  render(){
    return (
      <div className='userGallery-container'>
        <h2> Gallery </h2>
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
  userGalleryItemsFetch: () => dispatch(userGalleryItemsFetchRequest()),
  userGalleryItemCreate: userGalleryItem => dispatch(userGalleryItemCreateRequest(userGalleryItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserGalleryContainer);