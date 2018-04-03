import React from 'react';
import * as util from '../../lib/util.js';

class Auth extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
  }


  render() {
    return( 
      <form onSubmit={this.handleSubmit}
        className='auth-form'>
        {util.renderIf(this.props.auth==='signup',
          <input 
            type='emai'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange} />
        )}
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange} />
        <input 
          type='password'
          name='password'
          placeholder='password'
          value={this.state.handleChange} />
        <button type='submit'>{this.props.auth}</button>
      </form>
    )
  }
}

export default Auth;