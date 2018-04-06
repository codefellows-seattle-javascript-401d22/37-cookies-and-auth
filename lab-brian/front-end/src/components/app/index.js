import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../navbar';
import UserAuthContainer from '../userAuth-container';
import UserProfileContainer from '../userProfile-container';
import Footer from '../footer';

import appCreateStore from '../../lib/app-create-store.js';
import * as util from '../../lib/util.js';
import { signIn } from '../../actions/userAuth-actions.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

const store = appCreateStore();

class App extends React.Component {
  componentDidMount() {
    // let token = util.readCookie('X-Sluggram-Token');
    // if (token) {
    //   this.props.signIn(token);
    // }
  }

  render() {
    return (
      <section className='hotpix'>
        <BrowserRouter>
          <section>
            <Route path='*' component={Navbar} />
            <Route path='/user/:auth' component={UserAuthContainer} />
            <Route exact path='/profile' component={UserProfileContainer}/>
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
  signIn: token => dispatch(signIn(token)),
  userprofileFetch: () => dispatch(userprofileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);