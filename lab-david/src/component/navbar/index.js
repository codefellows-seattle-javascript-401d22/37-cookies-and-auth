'use strict';

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import {logout} from '../../action/auth-actions.js';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout();
    this.props.history.push('/welcome/login')
  }

  render(){
    return(
      <nav>
        {util.renderIf(!this.props.loggedIn,
          <ul>
            <li>
              <Link to='/welcome/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/welcome/login'>Login</Link>
            </li>
          </ul>
        )}
        {util.renderIf(this.props.loggedIn,
          <ul>
            <li>
            <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        )}
        {util.renderIf(this.props.loggedIn,
          <button onClick={this.handleLogout}>Logout</button>)}
      </nav>
    )
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.auth,
});

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);