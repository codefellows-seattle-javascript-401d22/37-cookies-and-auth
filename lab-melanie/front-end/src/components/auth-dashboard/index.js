import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../auth-form/';
import { signUpRequest, loginRequest } from '../../actions/auth-actions.js';
import { logError } from '../../lib/util';
import { profileFetchRequest } from '../../actions/profile-actions';

class AuthDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.auth && props.profile) props.history.replace('/dashboard');
    if (props.auth && !props.profile) props.history.replace('/settings');
  }

  handleLogin(user) {
    let { profileFetch, history } = this.props;

    return this.props.login(user)
      .then(() => profileFetch())
      .then(() => history.push('/dashboard'))
      .catch(logError);
  }

  handleSignup(user) {

  }

  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'login' ? this.props.login : this.props.signup;

    return (
      <section className='auth-dashboard'>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
        
        {params.auth === 'login' ?
          <Link to='/welcome/signup'> signup </Link> : undefined }

        {params.auth === 'signup' ?
          <Link to='/welcome/login'> login </Link> : undefined }
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
    login: user => dispatch(loginRequest(user)),
    profileFetch: () => dispatch(profileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);