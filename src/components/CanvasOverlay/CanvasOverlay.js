import React, { Component } from 'react';

import classes from './CanvasOverlay.css';

// <div className={classes.ImageContainer}>
// <img className={classes.MainImage} src={mainImage} alt="" />
// </div>

// <div className={classes.ScrollBounce}>
//   <div className={classes.Bounce}>
//     <div class="fa fa-chevron-down fa-2x"></div>
//   </div>
// </div>

class CanvasOverlay extends Component {
	render() {
		return (
			<div className={classes.CanvasOverlay}>
				<p className={classes.Greeting}>I LOVE ART</p>
				<p className={classes.Greeting}>I LIVE IN AUSTIN</p>
				<br />
				<a
					className={classes.Greeting + ' ' + classes.Link}
					href="https://www.vaughtschocolate.com/"
					target="_blank"
				>
					I MAKE CHOCOLATE
				</a>
				<a
					className={classes.Greeting + ' ' + classes.Link}
					href="https://www.linkedin.com/in/trevor-frese/"
					target="_blank"
				>
					LINKEDIN
				</a>
			</div>
		);
	}
}

export default CanvasOverlay;
