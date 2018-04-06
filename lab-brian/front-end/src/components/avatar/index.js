import React from 'react';

const Avatar = props => (
  <div className='avatar'>
    <img src={props.userprofile.avatar} /> 
  </div>
);

export default Avatar;

// export default (props) => (
//   <div className='avatar'>
//     <img src={props.userprofile.avatar} /> 
//   </div>
// );