import React from 'react';
import superagent from 'superagent';
import { isEmail, isAlphanumeric, isAscii } from 'validator';
import debounce from 'lodash/fp/debounce';

import Tooltip from '../tooltip';
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
      usernameAvailable: true,
      passwordError: null,
      error: null,
      focused: null,
      submitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.setState({ username: '', email: '', password: '' });
  }

  validateInput = e => {
    let { name, value } = e.target;

    let errors = {
      emailError: this.state.emailError,
      passwordError: this.state.passwordError,
      usernameError: this.state.usernameError,
    };

    let setError = (name, error) => errors[`${name}Error`] = error;
    let deleteError = name => errors[`${name}Error`] = null;

    if(name === 'email') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isEmail(value))
        setError(name, `${value} is not a valid email`)
      else
        deleteError(name)
    }

    if(name === 'username') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isAlphanumeric(value))
        setError(name, 'username can only contain letters and numbers')
      else 
        deleteError(name)
    }

    if(name === 'password') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isAscii(value))
        setError(name, 'password may only contain normal charachters')
      else 
        deleteError(name)
    }

    this.setState({
      ...errors, error: !!(errors.emailError || errors.usernameError || errors.passwordError),
    })
  };

  handleFocus = e => this.setState({ focused: e.target.name});

  handleBlur = e => {
    let { name } = e.target;
    this.setState(state => ({
      focused: state.focused == name ? null : state.focused,
    }))
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.validateInput({...e});

    this.setState({
      [name]: value,
    });

    if(this.props.userAuth === 'signup' && name === 'username') {
      this.usernameCheckAvailable(value);
    }
  };

  usernameCheckAvailable = username => {
    return superagent.get(`${__API_URL__}/usernames/${username}`)
      .then(() => this.setState({usernameAvailable: true }))
      .catch(() => this.setState({ usernameAvailable: false }))
  };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.error) {
      this.props.onComplete(this.state)
        .catch(err => {
          console.error(err);
          this.setState({ 
            error,
            submitted: true,
        });
      });
    }
    this.setState(state => ({
      submitted: true,
      usernameError: state.usernameError || state.username ? null : 'required',
      emailError: state.emailError || state.email ? null : 'required',
      passwordError: state.passwordError || state.password ? null : 'required',
    }))
  };

  render() {
    let { focused, submitted, username, emailError, passwordError, usernameError, usernameAvailable } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={util.classToggler({
        'userauth-form': true,
        'error': this.state.error && this.state.submitted,
      })}>

        {util.renderIf(this.props.userAuth === 'signup',
          <div>
            <h2 className='title'>signup.</h2>
            <input
              className={util.classToggler({error: emailError})}
              type='text'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
                        <Tooltip message={emailError} show={focused === 'email' || submitted} />
          </div>
        )}

        {util.renderIf(this.props.userAuth === 'signin',
            <h2 className='title'>signin.</h2>
        )}

        <input
          className={util.classToggler({error: usernameError || !usernameAvailable})}
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Tooltip message={usernameError} show={focused === 'username' || submitted}/>

        {util.renderIf(username,
          <div className='username-availability-outer'>
            <p className='username-availability'>
              {username} {usernameAvailable ? 'available': 'not available'}
            </p>
          </div>
        )}


        <input
          className={util.classToggler({passwordError})}
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
                <Tooltip message={passwordError} show={ focused === 'password' || submitted}/>
        
        <button type='submit' className='lightButton'> {this.props.userAuth} </button>
      </form>
    );
  }
}

export default UserAuthForm;

