import React, { Component, useEffect } from 'react';
import { FEATURES } from '../shared/features';

class FeaturedWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: FEATURES
    };
  }
  render() {
    const featDisplay = this.state.features.map(feature => {
      return (
        <div id='featureImage' key={feature.id} className='col'>
          <img
            width='400px'
            height='400px'
            src={feature.image}
            alt={feature.name}
          />
          <h2>{feature.name}</h2>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{featDisplay}</div>
      </div>
    );
  }
}

export default FeaturedWork;
