import React from 'react';

import Link from '../../../UI/Layout/Link/Link';

import classes from './Project.css';

const project = (props) => (
  <div className={classes.Project}>
    <div className={classes.Work + ' ' + classes.Card}>
      <div className={classes.LogoContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.companyUrl}>
          <img className={classes.Logo} src={props.image} alt="" />
        </a>
      </div>
    </div>
    <div className={classes.WorkDescription + ' ' + classes.Card}>
      <div className={classes.TitleBlock}>
        <div className={classes.Title}>
          <Link url={props.companyUrl} linkText={props.company}/>
        </div>
        <div className={classes.Subtitle}>
          <strong>{props.position}</strong>
        </div>
      </div>
      {/* <CardTitle title={props.company} subtitle={props.position + ", " + props.location} /> */}
      <div className={classes.TextBlock}>
        <p><strong>What: </strong><br/>{props.what}</p>
        <p><strong>I Learned: </strong><br/>{props.learned}</p>
      </div>
    </div>
  </div>
);

export default project;
