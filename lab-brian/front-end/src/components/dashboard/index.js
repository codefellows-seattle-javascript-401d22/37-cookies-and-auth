import React from 'react';
import { connect } from 'react-redux';
import UserForm from '../user-form';
import * as util from './../../lib/util.js';
import { signupRequest, signinRequest } from '../../actions/user-actions.js';

class Dashboard extends React.Component {
  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'signin' ? this.props.signin : this.props.signup;
    return (
      <section>
        <UserForm auth={params.auth} onComplete={handleComplete} />
      </section>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    signin: (user) => dispatch(signinRequest(user)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);