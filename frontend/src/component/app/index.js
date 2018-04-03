import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Landing from '../landing';

let store = appCreateStore();

class App extends React.Component {
  render() {
    return (
      <section className='fileapp'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>File Organizer</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>Sign Up</Link></li>
                    <li><Link to='/welcome/signin'>Sign In</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={Landing} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;