'use strict';

import React from 'react';
import * as util from './../../lib/util.js';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.profile ? {...props.profile, preview: ''} : { bio: '', avatar: null, preview: ''};
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { type, name } = e.target;

    if(name === 'bio') {
      this.setState({ bio: e.target.value });
    }

    if(name === 'avatar') {
      let {files} = e.target;
      let avatar = files[0];
      this.setState({avatar});
      util.imagePreview(avatar)
      .then(preview => this.setState({preview}))
      .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }
}