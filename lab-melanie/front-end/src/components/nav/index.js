import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <h1>instaclone</h1>
        <nav>
          <ul>
            <li><Link to='/welcome/signup'>sign up</Link></li>
            <li><Link to='/welcome/login'>log in</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}