'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appCreateStore from './../../lib/app-store-create.js';
import Dashboard from './../dashboard';


let store = appCreateStore();

class App extends React.Component{
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
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={Dashboard} />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App;