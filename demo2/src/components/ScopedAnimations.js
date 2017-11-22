import styles from './ScopedAnimations.less';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';

class ScopedAnimations extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }
};

export default  CSSModules(ScopedAnimations, styles)
