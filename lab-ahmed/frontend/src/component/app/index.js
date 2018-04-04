import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../landing';
import appCreateStore from '../../lib/app-create-store.js';

let store = appCreateStore();

class App extends React.Component {
  render() {
    return (
      <section className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>frontend cfgram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/signin'>signin</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={Landing} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;