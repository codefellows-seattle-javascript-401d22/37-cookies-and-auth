import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import appCreateStore from '../../lib/app-create-store.js';
import { tokenSet } from '../../actions/auth-actions.js';
import { readCookie } from '../../lib/util.js';

import NavBar from '../nav/';
import Dashboard from '../dashboard/';
import ProfileContainer from '../profile-container/';

let store = appCreateStore();

export default class App extends Component {
  componentDidMount() {
    let token = readCookie('X-Sluggram-Token');
    
    if (!token) return;
    if (token) return this.props.tokenSet(token);
  }

  render() {
    return (
      <main className='instaclone'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <NavBar />

              <Route
                path='/welcome/:auth'
                component={Dashboard}
              />

              <Route
                exact path='/settings'
                component={ProfileContainer}
              />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}