import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ScopedSelectors.less';

class ScopedSelectors extends Component {

  render() {
    return (
      <div className={styles.root}>
      	<p className={styles.text}>Scoped Selectors</p>
        	<p className={styles.text}>Scoped Selectors</p>
      </div>
    );
  }
};

export default  CSSModules(ScopedSelectors, styles)
