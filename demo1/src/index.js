import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import CompositionOverrides from './components/CompositionOverrides';
import GlobalSelectors from './components/GlobalSelectors';
import ScopedAnimations from './components/ScopedAnimations';
import ScopedSelectors from './components/ScopedSelectors';
import StyleVariantA from './components/StyleVariantA';

import App from './components/app';

import './styles/global/normalize.css'

ReactDOM.render((
	<HashRouter>
		<App>
			<Route path="/CompositionOverrides" component={CompositionOverrides}/>
			<Route path="/GlobalSelectors" component={GlobalSelectors}/>
			<Route path="/ScopedAnimations" component={ScopedAnimations}/>
			<Route path="/ScopedSelectors" component={ScopedSelectors}/>
			<Route path="/StyleVariantA" component={StyleVariantA}/>
		</App>
	</HashRouter>), document.getElementById('root'));
