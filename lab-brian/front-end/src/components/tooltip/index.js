import React from 'react';
import * as util from '../../lib/util.js';

const Tooltip = props => (
  <div className='tooltip'>
    {util.renderIf(props.message && props.show,
      <section>
        <p> {props.message} </p>
        <i className='fa fa-caret-down' />
      </section>
    )}
  </div>
);

export default Tooltip;