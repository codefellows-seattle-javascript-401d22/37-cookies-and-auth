import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store.js';
import Navbar from '../navbar';
import Dashboard from '../dashboard';
import Settings from '../settings';
import Footer from '../footer';
import * as util from '../../lib/util.js';
import { tokenSet }  from '../../actions/user-actions.js';

const store = appCreateStore();

class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      this.props.tokenSet(token);
    }
  }
  render() {
    return (
      <main className='hotpix'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Navbar />
              <Route path='/user/:auth' component={Dashboard} />
              <Route path='/settings' component={Settings} />
              <Footer />
            </section>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;