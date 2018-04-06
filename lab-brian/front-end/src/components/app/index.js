import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../navbar';
import Dashboard from '../dashboard';
import Settings from '../settings';
import Footer from '../footer';

import appCreateStore from '../../lib/app-create-store.js';
import * as util from '../../lib/util.js';
import { tokenSet } from '../../actions/userAuth-actions.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

const store = appCreateStore();

class App extends React.Component {
  componentDidMount() {
    // let token = util.readCookie('X-Sluggram-Token');
    // if (token) {
    //   this.props.tokenSet(token);
    // }
  }

  render() {
    return (
      <section className='hotpix'>
        <BrowserRouter>
          <section>
            <Route path='*' component={Navbar} />
            <Route path='/user/:auth' component={Dashboard} />
            <Route exact path='/settings' component={Settings}/>
            {/* <Route exact path='/dashboard' component={DashboardContainer} />
            <Route exact path='/' component={DashboardContainer} /> */}
            <Footer />
          </section>
        </BrowserRouter>
      </section>
    );
  }
}

let mapStateToProps = state => ({
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
  userprofileFetch: () => dispatch(userprofileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);