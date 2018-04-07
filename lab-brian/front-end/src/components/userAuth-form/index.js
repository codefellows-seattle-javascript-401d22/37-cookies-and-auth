import React from 'react';
import * as util from '../../lib/util';

class UserAuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: null,
      usernameError: null,
      passwordError: null,
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then( () => {
        this.setState({ username: '', email: '', password: '' });
      })
      .catch(err => {
        console.error(err);
        this.setState({ err });
      });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'username required' : null,
      emailError: name === 'email' && !value ? 'email required' : null,
      passwordError: name === 'password' && !value ? 'password required' : null,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='user-form'>
        {util.renderIf(this.props.userAuth === 'signup',
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange} 
          />
        )}
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.userAuth} </button>
      </form>
    );
  }
}

export default UserAuthForm;

