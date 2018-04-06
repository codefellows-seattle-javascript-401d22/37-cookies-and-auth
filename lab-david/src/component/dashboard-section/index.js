'use stict';

import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';

class DashboardSection extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className='dashboard-section'>
        <GalleryForm
          buttonText='Create Gallery'
          onComplete={this.props.galleryCreate} />
      </section>
    )
  }
}

// this is gonna be a lot more work than I thought it was, sluggram doesn't support what I want to create...