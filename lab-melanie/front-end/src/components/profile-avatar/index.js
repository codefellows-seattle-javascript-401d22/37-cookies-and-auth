import React, { Component, Fragment } from 'react';

export default class ProfileAvatar extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.profile.avatar} />
      </React.Fragment>
    );
  }
}