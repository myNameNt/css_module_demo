import styles from './StyleVariantA.less';
import CSSModules from 'react-css-modules';
import React, { Component } from 'react';

class StyleVariantA extends Component {

  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>Style Variant A</p>
      </div>
    );
  }

};

export default  CSSModules(StyleVariantA, styles)
