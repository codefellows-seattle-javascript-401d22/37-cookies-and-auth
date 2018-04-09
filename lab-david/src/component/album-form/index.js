'use strict';

import React from 'react';

class AlbumForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.album ? {...props.album} : {
      name: '',
      desc: '',
      created: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete({...this.state});

    if(!this.props.album){
      this.setState({name: '', desc: '', created: ''})
    }
  }

  render(){
    return(
      <form className='album-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Album Name'
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          name='desc'
          type='text'
          placeholder='Album Description'
          value={this.state.desc}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    )
  }
}

export default AlbumForm;