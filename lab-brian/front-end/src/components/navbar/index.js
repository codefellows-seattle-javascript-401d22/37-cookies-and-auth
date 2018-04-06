import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><Link to='/user/signup'>signup</Link></li>
          <li><Link to='/user/signin'>signin</Link></li>
          <li><Link to='/settings'>settings</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;