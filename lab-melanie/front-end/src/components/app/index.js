import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store.js';

import NavBar from '../nav/';
import Dashboard from '../dashboard/';

let store = appCreateStore();

export default class App extends Component {
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
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}