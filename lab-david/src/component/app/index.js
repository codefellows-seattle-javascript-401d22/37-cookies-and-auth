'use strict';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import DashboardSection from '../dashboard-section';
import WelcomeSection from '../welcome-section';
import * as util from '../../lib/util.js';
import SettingsSection from '../settings-section';
import Navbar from '../navbar';
import {tokenSet} from '../../action/auth-actions';
import {connect} from 'react-redux';


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
          <BrowserRouter>
            <section>
              <header>
                <Navbar />
              </header>
              {util.renderIf(!this.props.loggedIn,
                <Route path='/welcome/:auth' component={WelcomeSection} />)}
              <Route exact path='/settings' component={SettingsSection} />
            </section>
          </BrowserRouter>
      </main>
    )
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.auth,
})

export default connect(mapStateToProps, null)(App);