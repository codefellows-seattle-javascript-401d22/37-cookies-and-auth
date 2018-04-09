import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: null,
      passwordError: null,
      emailError: null,
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'username required' : null,
      emailError: name === 'email' && !value ? 'email required' : null,
      passwordError: name === 'password' && !value ? 'password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.error) {
      this.props.onComplete(this.state)
        .then( () => {
          this.setState({ username: '', email: '', password: '' });
        })
        .catch( err => {
          console.error(err);
          this.setState({ error: err });
        });
    }
  }

  render() {
    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <div className='input'>
          {this.props.auth === 'signup' ? 
            <h2>sign up</h2>
            : <h2>sign in</h2>
          }

          {this.props.auth === 'signup' ?
            <input
              type='email'
              name='email'
              placeholder='enter email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            : undefined }

          <input
            type='text'
            name='username'
            placeholder='enter username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            type='password'
            name='password'
            placeholder='enter password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        {this.props.auth === 'signup' ? 
          <button type='submit'>sign Up</button>
          : <button type='submit'>sign In</button>
        }
      </form>
    );
  }
}