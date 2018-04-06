import React from 'react';
import {connect} from 'react-redux';
import Auth from '../auth';
import * as util from '../../lib/util.js';
import {signupRequest, loginRequest} from '../../action/auth-actions.js';

class Landing extends React.Component {
  render() {
    let {params} = this.props.match;

    let handleComplete = params.auth === 'login' ? this.props.login : this.props.signup;

    return (
      <section>
        <Auth auth={params.auth} onComplete={handleComplete} />
      </section>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user))
  }
}

export default connect(null, mapDispatchToProps)(Landing);