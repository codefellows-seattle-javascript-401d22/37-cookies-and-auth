'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AuthForm from '../auth-form';
import * as util from '../../lib/util.js';
import {signupRequest, loginRequest} from '../../action/auth-actions.js';

class WelcomeSection extends React.Component{
  render(){
    let {params} = this.props.match;
    let handleComplete = params.auth === 'login' ? this.props.login : this.props.signup;

    if(this.props.loggedIn){
      return <Redirect to='/dashboard' />;
    }

    return(
      <section>
        <AuthForm 
          auth={params.auth}
          onComplete={handleComplete} />
      </section>
    )
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.auth,
})

let mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)),
    login: user => dispatch(loginRequest(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeSection);