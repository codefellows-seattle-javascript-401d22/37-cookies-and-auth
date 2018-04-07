'use stict';

import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import GalleryForm from '../gallery-form';

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

export default DashboardSection;