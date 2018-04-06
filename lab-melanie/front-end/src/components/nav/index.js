import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { readCookie, classToggler } from '../../lib/util.js';
import { tokenSet, logout } from '../../actions/auth-actions.js';
import { profileFetchRequest } from '../../actions/profile-actions.js';

// BREAK INTO NEW COMPONENT
let NavLink = props => (
  <li className={classToggler({ selected: props.url === `/${props.route}` })}>
    <Link to={`/${props.route}`}>
      {props.route}
    </Link>
  </li>
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.validateRoute = this.validateRoute.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.validateRoute(this.props);
  }

  validateRoute(props) {
    let { match, history } = props;
    let token = readCookie('X-Sluggram-Token');

    if (!token) return history.replace('/welcome/signup');

    this.props.tokenSet(token);
    this.props.profileFetch()
      .catch(() => {
        console.log('__PROFILE FETCH ERROR__: user does not have profile');
        if (!match.url.startsWith('/settings')) return history.replace('/settings');
      });
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/welcome/login');
  }

  render() {
    let { url } = this.props.match;

    return (
      <header>
        <h1>instaclone</h1>
        <nav>
          {this.props.loggedIn ? 
            <ul>
              <NavLink route='settings' url={url} />
              <NavLink route='dashboard' url={url} />
            </ul>
            : undefined }
            
          {this.props.loggedIn ? 
            <button onClick={this.handleLogout}>log out</button>
            : undefined }

          {/* <li><Link to='/welcome/signup'>sign up</Link></li>
            <li><Link to='/welcome/login'>sign in</Link></li>
            <li><Link to='/settings'>profile settings</Link></li> */}
        </nav>
      </header>
    );
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  tokenSet: token => dispatch(tokenSet(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
