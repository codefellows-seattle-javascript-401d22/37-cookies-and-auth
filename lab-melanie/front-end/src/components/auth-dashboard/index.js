import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../auth-form/';
import { logError, readCookie } from '../../lib/util';
import { signUpRequest, signinRequest } from '../../actions/auth-actions.js';
import { profileFetchRequest } from '../../actions/profile-actions';
import { tokenSet } from '../../actions/auth-actions.js';

class AuthDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.auth && props.profile) props.history.replace('/dashboard');
    if (props.auth && !props.profile) props.history.replace('/settings');
  }

  handleSignin(user) {
    console.log('Auth dashboard handleSignin:', this.props);
    let { profileFetch, history, auth } = this.props;

    return this.props.signin(user)
      .then(auth => {
        return tokenSet(auth.text);
      })
      .then(() => profileFetch())
      .then(() => history.push('/dashboard'))
      .catch(logError);
  }

  handleSignup(user) {
    console.log('Auth dashboard handleSignup:', this.props);
    return this.props.signup(user)
      .then(() => this.props.history.push('/settings'))
      .catch(logError);
  }

  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'signin' ? this.handleSignin : this.handleSignup;

    return (
      <section className='auth-dashboard'>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
        
        {/* {params.auth === 'signin' ?
          <Link to='/welcome/signup'> signup </Link> : undefined } */}

        {/* {params.auth === 'signup' ?
          <Link to='/welcome/signin'> signin </Link> : undefined } */}
      </section>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.profile,
});

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signUpRequest(user)),
    signin: user => dispatch(signinRequest(user)),
    tokenSet: token => dispatch(tokenSet(token)),
    profileFetch: () => dispatch(profileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);