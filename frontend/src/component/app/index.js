import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Landing from '../landing';
import Navigation from '../nav';
import Header from '../header';
import SettingsContainer from '../settings-container';
import * as util from '../../lib/util.js';
import appCreateStore from '../../lib/app-create-store';
import {tokenSet} from '../../action/auth-actions.js';

let store = appCreateStore();

class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      tokenSet(token);
    }
  }

  render() {
    return (
      <section className='fileapp'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Header />
              <Navigation />
              <Route path='/welcome/:auth' component={Landing} />
              <Route exact path ='/settings' component={SettingsContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App;