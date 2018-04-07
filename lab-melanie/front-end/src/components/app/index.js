import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { tokenSet } from '../../actions/auth-actions.js';
import { profileFetch, profileFetchRequest } from '../../actions/profile-actions.js';

import NavBar from '../nav/';
import AuthDashboard from '../auth-dashboard/';
import ProfileContainer from '../profile-container/';
import PhotoDashboard from '../photo-dashboard/';

class App extends Component {  
  render() {
    return (
      <main className='instaclone'>
        <BrowserRouter>
          <section>
            <Route path='*' component={NavBar} />
            <Route exact path='/welcome/:auth' component={AuthDashboard} />
            <Route exact path='/settings' component={ProfileContainer} />
            <Route exact path='/dashboard' component={PhotoDashboard} />
            <Route exact path='/' component={PhotoDashboard} />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);