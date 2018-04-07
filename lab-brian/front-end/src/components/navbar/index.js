import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Icon from '../icons';
import Avatar from '../avatar';
import { signIn, signOut } from '../../actions/userAuth-actions.js';
import * as util from '../../lib/util.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.validateRoute(this.props);
  }

  validateRoute = props => {
    let { match, history } = props;
    let token = util.readCookie('X-Sluggram-Token');

    if(!token) return history.replace('/user/signup');
    
    this.props.signIn(token);
    this.props.userprofileFetch()
      .catch( () => {
        console.log('USER PROFILE FETCH ERROR: no profile');
        if(!match.url.startsWith('/profile')) return history.replace('/profile');
      })
  };

  handleSignOut = () => {
    this.props.signOut();
    this.props.history.push('/user/signin');
  };

  render() {
    console.log('path', this.props.match);
    let NavLink = props => (
      <li className={util.classToggler({selected: props.url === `/${props.route}` })} >
        <Link to={`/${props.route}`}>
          {props.route}
        </Link>
      </li>
    );

    let { url } = this.props.match;

    return (
      <nav className='navbar'>
        <div className='nav-left'>
          <Link to='/'><Icon className='logo' name='flame' /> <h1>Hot Pix</h1></Link>
        </div>

        {util.renderIf(this.props.loggedIn,
          <div className='navLinks'>
            <ul>
              <li><Link to='/user/signup'>signup</Link></li>
              <li><Link to='/user/signin'>signin</Link></li>
              <li><Link to='/profile'>profile</Link></li>
            </ul>
          </div>
        )}

        {util.renderIf(this.props.userProfile,
          <Avatar userprofile={this.props.userprofile} />
        )}

        {util.renderIf(this.props.loggedIn,
          <button onClick={this.handleSignOut}>logout</button>
        )}
      </nav>
    );
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.userAuth,
  userprofile: state.userProfile,
});

let mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  signIn: token => dispatch(signIn(token)),
  userProfileFetch: () => dispatch(userprofileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);