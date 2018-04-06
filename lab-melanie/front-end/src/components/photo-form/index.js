import React, { Component } from 'react';

export default class PhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.photo
      ? props.photo
      : { description: '', preview: '', photo: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

  };

  handleSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    return (
      <form className='photo-form' onSubmit={this.handleSubmit}>

      </form>
    );
  }
}