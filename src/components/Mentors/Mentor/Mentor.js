import React from 'react';

import Link from '../../UI/Layout/Link/Link';

import classes from './Mentor.css';

const project = (props) => (
  <div className={classes.Mentor}>
    <div className={classes.Work + ' ' + classes.Card}>
      <div className={classes.LogoContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.url}>
          <img className={classes.Logo} src={props.image} alt="" />
        </a>
      </div>
    </div>
    <div className={classes.WorkDescription + ' ' + classes.Card}>
      <div className={classes.TitleBlock}>
        <div className={classes.Title}>
          <Link url={props.url} linkText={props.name}/>
        </div>
        <div className={classes.Subtitle}>
          <strong>{props.job}</strong>
        </div>
      </div>
      <hr/>
      {/* <CardTitle title={props.company} subtitle={props.position + ", " + props.location} /> */}
      <div className={classes.TextBlock}>
        <p>{props.bio}</p>
      </div>
    </div>
  </div>
);

export default project;
