import styles from './CompositionOverrides.less';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';

class CompositionOverrides extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Class Composition with Overrides</p>
      </div>
    );
  }
};

export default CSSModules(CompositionOverrides, styles)
