import React from 'react';
import { connect } from 'react-redux';
import UserAuthForm from '../userAuth-form';
import * as util from './../../lib/util.js';
import { signupRequest, signinRequest } from '../../actions/userAuth-actions.js';

class UserAuthContainer extends React.Component {
  render() {
    let { params } = this.props.match;
    let handleComplete = params.auth === 'signin' ? this.props.signin : this.props.signup;
    return (
      <section>
        <UserAuthForm auth={params.auth} onComplete={handleComplete} />
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

export default connect(null, mapDispatchToProps)(UserAuthContainer);