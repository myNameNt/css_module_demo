import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

import styles from './app.less'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div styleName='global'>
				<h1 styleName='title'>css module test case</h1>
				<ul role="nav" styleName='nav'>
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

export default CSSModules(App, styles)
