import React from 'react';

import Welcome from '../Welcome/Welcome';
import Fireworks from '../Fireworks/Fireworks';

import classes from './HomePage.css';

const homePage = (props) => (
	<div className={classes.HomePage}>
		<Welcome />
		<Fireworks />
	</div>
);

export default homePage;
