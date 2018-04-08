import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../auth-form/';
import { logError } from '../../lib/util';
import { signUpRequest, signinRequest } from '../../actions/auth-actions.js';
import { profileFetchRequest } from '../../actions/profile-actions';

class AuthDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  // constructor(props) {
  //   super(props);
  //   this.validateRoute = this.validateRoute.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }

  // componentDidMount() {
  //   return this.validateRoute(this.props);
  // }

  // validateRoute(props) {
  //   console.log(this.props);
  //   let { match, history } = props;

  //   // let token = readCookie('X-Sluggram-Token');
  //   // if (!token) return history.replace('/welcome/signup');

  //   // this.props.tokenSet(token);
  //   // this.props.profileFetch()
  //   //   .then(profile => console.log('__PROFILE FETCHED__:', profile))
  //   //   .catch(() => {
  //   //     console.log('__PROFILE FETCH ERROR__: user does not have profile');
  //   //     if (!match.url.startsWith('/settings')) return history.replace('/settings');
  //   //   });
  // }

  componentWillReceiveProps(props) {
    if (props.auth && props.profile) props.history.replace('/dashboard');
    if (props.auth && !props.profile) props.history.replace('/settings');
  }

  handleSignin(user) {
    console.log('Auth dashboard handleSignin:', this.props);
    let { profileFetch, history } = this.props;

    return this.props.signin(user)
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
    profileFetch: () => dispatch(profileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthDashboard);