'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Dashboard from '../dashboard';
import * as util from '../../lib/util.js';
import SettingsContainer from '../settings';
import {tokenSet} from '../../action/auth-actions';


let store = appCreateStore();

class App extends React.Component{
  componentDidMount(){
    let token = util.readCookie('X-Sluggram-Token');
    if(token){
      this.props.tokenSet(token);
    }
  }

  render(){
    return(
      <main className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>cfgram</h1>
                <nav>
                  <ul>
                    <li>
                      <Link to='/welcome/signup'>signup</Link>
                    </li>
                    <li>
                      <Link to='/welcome/login'>login</Link>
                    </li>
                    <li>
                      <Link to='/settings'>settings</Link>
                    </li>
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