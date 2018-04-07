import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as util from '../../lib/util.js';
import Navbar from '../navbar';
import UserAuthContainer from '../userAuth-container';
import UserProfileContainer from '../userProfile-container';
import GalleryContainer from '../gallery-container';
import Footer from '../footer';

import { signIn } from '../../actions/userAuth-actions.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

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
            <Route path='/user/:userAuth' component={UserAuthContainer} />
            <Route exact path='/profile' component={UserProfileContainer}/>
            <Route exact path='/gallery' component={GalleryContainer}/>
            <Route exact path='/' component={GalleryContainer}/>
            {/* <Route exact path='/dashboard' component={DashboardContainer} />
            <Route exact path='/' component={DashboardContainer} /> */}
            <Route path='*' component={Footer} />
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