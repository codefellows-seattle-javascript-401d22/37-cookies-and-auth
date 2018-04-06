import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../navbar';
import Dashboard from '../dashboard';
import Settings from '../settings';
import Footer from '../footer';
import * as util from '../../lib/util.js';
import appCreateStore from '../../lib/app-create-store.js';
import {tokenSet} from '../../actions/userAuth-actions.js';

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
      <section className='hotpix'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Navbar />
              <div> <p> header</p></div>
              <Route path='/user/:auth' component={Dashboard} />
              <Route exact path='/settings' component={Settings}/>
              <Footer />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;