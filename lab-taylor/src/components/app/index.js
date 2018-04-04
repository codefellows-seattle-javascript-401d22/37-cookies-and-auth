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
            <Route path='/welcome/:auth' component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App;