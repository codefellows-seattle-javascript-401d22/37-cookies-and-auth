import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store';
import Landing from '../landing';
import Navigation from '../nav';

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
                <Navigation />
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