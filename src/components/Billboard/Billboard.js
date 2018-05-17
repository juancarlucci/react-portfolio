import React, { Component } from 'react';
import './Billboard.css';

import { Parallax } from 'react-parallax';


class Billboard extends Component {
  render() {
    return (
    <div className="billboard" id="billboard">
    <Parallax
      blur={ 0 }
      bgImage={require('../../images/star-bg.png')}
      bgImageAlt="background stars image"
      strength={200}
    >
      <div style={{ height: '100vh' }} >
        <div className="billboard-box vertical-center">
          <h1 className="title">Juan Carlos Collins</h1>
          <p className="lead sub-title">Web Developer | Data Visualizer</p>
          <h2 className="title-description">I am driven by a deep enthusiasm for visualizing data and the relationships therein</h2>
        </div>
      </div>
    </Parallax>

  </div>
);}
}
export default Billboard;
