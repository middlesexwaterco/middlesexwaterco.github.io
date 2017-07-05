"use strict";
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {createApp} from '@phenomic/preset-react-app/lib/client';
import {NotFound, AboutPageContainer} from './src';

const Home = () =>
		<div>
			<p>This is a homepage</p>
		</div>;

export default createApp(() =>
		<Router history={browserHistory}>
			<Route path="/" component={Home}/>
			<Route path="/about/*" component={AboutPageContainer} collection="about" />
			<Route path="*" component={NotFound} />
		</Router>
);

