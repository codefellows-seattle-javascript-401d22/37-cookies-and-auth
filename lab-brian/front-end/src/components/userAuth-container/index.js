import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import * as util from './../../lib/util.js';
import UserAuthForm from '../userAuth-form';
import { signupRequest, signinRequest } from '../../actions/userAuth-actions.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

class UserAuthContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(props){
    if(props.userAuth && props.userprofile) props.history.replace('/gallery');
    if(props.userAuth && !props.userprofile) props.history.replace('/profile');
  }

  handleSignin = user => {
    let { userprofileFetch, history } = this.props;
    return this.props.signin(user)
      .then(() => userprofileFetch())
      .then(() => history.push('/gallery'))
      .catch(util.logError);
  };

  handleSignup = user => {
    return this.props.signup(user)
      .then(() => this.props.history.push('/profile'))
      .catch(util.logError);
  }

  render() {
    let { params } = this.props.match;
    let handleComplete = params.userAuth === 'signin' ? this.handleSignin : this.handleSignup;
    return (
      <section className='auth-container'>
        <UserAuthForm userAuth={params.userAuth} onComplete={handleComplete} />

        <div className='userauth-buttons'>
          {util.renderIf(params.userAuth === 'signin',
            <Link to='/user/signup'><button className='lightButton'>signup</button></Link>
          )}

          {util.renderIf(params.userAuth === 'signup',
            <Link to='/user/signin'><button className='darkButton'>signin</button></Link>
          )}
        </div>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userAuth: state.userAuth,
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signupRequest(user)),
    signin: user => dispatch(signinRequest(user)),
    userprofileFetch: () => dispatch(userprofileFetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthContainer);