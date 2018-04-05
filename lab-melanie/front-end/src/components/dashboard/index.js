import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from '../auth-form/';
import { signUpRequest, loginRequest } from '../../actions/auth-actions.js';

class Dashboard extends Component {
  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'login' ? this.props.login : this.props.signup;

    return (
      <section className='dashboard'>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signUpRequest(user)),
    login: user => dispatch(loginRequest(user)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);