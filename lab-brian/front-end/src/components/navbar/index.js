import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Icon from '../icons';
import Avatar from '../avatar';
import * as util from '../../lib/util.js';
import { signIn, signOut } from '../../actions/userAuth-actions.js';
import { userprofileFetchRequest } from '../../actions/userProfile-actions.js';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.validateRoute(this.props)
  // }

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
    let NavLink = props => (
      <li className={util.classToggler({selected: props.url === `/${props.route}` })} >
        <Link to={`/${props.route}`}>
          {props.route}
        </Link>
      </li>
    );

    console.log('path', this.props.match)
    let { url } = this.props.match;

    return (
      <nav className='navbar'>
        <div className='nav-left'>
          <Link to='/' className='logoOuter'><Icon className='logo' name='flame' /> <h1>hot pix</h1></Link>
        </div>

        {util.renderIf(this.props.loggedIn,
          <button onClick={this.handleSignOut}>logout</button>
        )}

        {util.renderIf(this.props.loggedIn,
          <div className='navLinks'>
            <ul>
              <NavLink route='profile' url={url} />
              <NavLink route='gallery' url={url} />
            </ul>
          </div>
        )}

        {util.renderIf(this.props.userprofile,
          <Avatar userprofile={this.props.userprofile} />
        )}


      </nav>
    );
  }
}

let mapStateToProps = state => ({
  loggedIn: state.userAuth,
  userprofile: state.userprofile,
});

let mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  signIn: token => dispatch(signIn(token)),
  userprofileFetch: () => dispatch(userprofileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);