import styles from './GlobalSelectors.less';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';

class GlobalSelectors extends Component {
  render() {
    return (
      <div className={ styles.root }>
        <p className="text">Global Selectors</p>
      </div>
    );
  }
};

export default  CSSModules(GlobalSelectors, styles)
