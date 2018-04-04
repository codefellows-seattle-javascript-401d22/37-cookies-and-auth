'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appCreateStore from './../../lib/app-store-create.js';
import * as util from './../../lib/util.js';
import {tokenSet} from '../../actions/auth-actions.js';
import Dashboard from './../dashboard';
import SettingsContainer from './../settings-container';


let store = appCreateStore();

class App extends React.Component{
  componentDidMount() {
    let token = util.getCookie('X-Sluggram-Token');
    if(token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return(
      <main className='app-container'>
        <Provider store={store}>
          <BrowserRouter>
            
          <section>
              <header>
                <h1>instaclone.</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                    <li><Link to='/settings'>settings</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={Dashboard} />
              <Route exact path='/settings' component={SettingsContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App;