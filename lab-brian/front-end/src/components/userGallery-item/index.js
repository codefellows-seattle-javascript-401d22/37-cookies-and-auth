import React from 'react';
import { connect } from 'react-redux';

import UserGalleryForm from '../userGallery-form';
import * as util from '../../lib/util.js';
import { userGalleryItemDeleteRequest, userGalleryItemUpdateRequest } from '../../actions/userGallery-actions.js';

class UserGalleryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { editing: false };
  }

  handleDelete = () => {
    return this.props.userGalleryItemDelete(this.props.userGalleryItem)
      .then(console.log)
      .catch(console.error);
  };

  handleUpdate = userGalleryItem => {
    return this.props.userGalleryItemUpdate(userGalleryItem)
      .then(() => {
        this.setState({ editing: false });
      })
      .catch(console.error);
  };

  render(){
    let { userGalleryItem } = this.props;
    return (
      <div>
        {util.renderIf(!this.state.editing,
          <div>
            <img src={userGalleryItem.url} />
            <p> {userGalleryItem.description}</p>
            <i onClick={this.handleDelete} className='fa fa-trash-o fa-3x' />
            <i onClick={() => this.setState({ editing: true })} className='fa fa-pencil fa-3x' />
          </div>
        )}

        {util.renderIf(this.state.editing,
          <div>
            <UserGalleryForm 
              userGalleryItem={this.props.userGalleryItem}
              buttonText='update photo'
              onComplete={this.handleUpdate}
            />
          </div>
        )}
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  userGalleryItemDelete: userGalleryItem => dispatch(userGalleryItemDeleteRequest(userGalleryItem)),
  userGalleryItemUpdate: userGalleryItem => dispatch(userGalleryItemUpdateRequest(userGalleryItem)),
});

export default connect(null, mapDispatchToProps)(UserGalleryItem);