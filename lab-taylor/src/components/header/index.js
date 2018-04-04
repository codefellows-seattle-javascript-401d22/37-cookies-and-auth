'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render() {
    return(
      <header>
        <h1>instaclone.</h1>
        <nav>
          <ul>
            <li><Link to='/welcome/signup'>signup</Link></li>
            <li><Link to='/welcome/login'>login</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;