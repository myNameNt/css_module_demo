import React, { Component } from 'react';

import styles from './ScopedSelectors.less';

export default class ScopedSelectors extends Component {

  render() {
    return (
      <div className={styles.root}>
      	<p className={styles.text}>Scoped Selectors</p>
        	<p className={styles.text}>Scoped Selectors</p>
      </div>
    );
  }
};
