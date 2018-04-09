import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Icon from '../icon';
import ProfileAvatar from '../profile-avatar';
import { readCookie } from '../../lib/util.js';
import { tokenSet, logout } from '../../actions/auth-actions.js';
import { profileFetchRequest } from '../../actions/profile-actions.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.validateRoute = this.validateRoute.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    return this.validateRoute(this.props);
  }

  validateRoute(props) {
    console.log(this.props);
    let { match, history } = props;

    let token = readCookie('X-Sluggram-Token');
    if (!token) return history.replace('/welcome/signup');

    this.props.tokenSet(token);
    // this.props.profileFetch()
    //   .then(profile => console.log('__PROFILE FETCHED__:', profile))
    //   .catch(() => {
    //     console.log('__PROFILE FETCH ERROR__: user does not have profile');
    //     if (!match.url.startsWith('/settings')) return history.replace('/settings');
    //   });
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/welcome/signin');
  }

  render() {
    let { url } = this.props.match;

    return (
      <header>
        <Icon />
        <h1><Link to='/'>instaclone</Link></h1>
        <nav>
          {this.props.loggedIn ? 
            <ul>
              <li><Link to='/settings'>settings</Link></li>
              <li><Link to='/dashboard'>dashboard</Link></li>
              <li><a onClick={this.handleLogout}>log out</a></li>
              {this.props.profile ?
                <li className='profile-avatar'><Link to='/settings'><ProfileAvatar profile={this.props.profile} /></Link></li>
                : undefined
              }
            </ul>
            :
            <ul>
              <li><Link to='/welcome/signup'>sign up</Link></li>
              <li><Link to='/welcome/signin'>sign in</Link></li>
            </ul>
          }
        </nav>
      </header>
    );
  }
}

let mapStateToProps = state => ({
  loggedIn: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  tokenSet: token => dispatch(tokenSet(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
