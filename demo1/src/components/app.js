import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import styles from './app.css'

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.global}>
				<h1 className={styles.title}>css module test case</h1>
				<ul role="nav" className={styles.nav}>
				 	<li><Link to="/CompositionOverrides">CompositionOverrides</Link></li>
				 	<li><Link to="/GlobalSelectors">GlobalSelectors</Link></li>
					<li><Link to="/ScopedAnimations">ScopedAnimations</Link></li>
					<li><Link to="/ScopedSelectors">ScopedSelectors</Link></li>
					<li><Link to="/StyleVariantA">StyleVariantA</Link></li>
			 	</ul>
				{this.props.children}
			</div>
		);
	}
}
