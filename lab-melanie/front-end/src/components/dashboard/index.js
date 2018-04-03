import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import AuthForm from '../auth-form/';
import { signUpRequest, signInRequest } from '../../actions/auth-actions.js';

class Dashboard extends Component {
  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'login' ? this.props.signin : this.props.signup;

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
    signin: user => dispatch(signInRequest(user)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);