import React from 'react';

import Link from '../../UI/Layout/Link/Link';

import classes from './Project.css';

const project = (props) => {
  let stack = ''
  if (props.stack) {
    stack = <div><hr/><p className={classes.Stack}>Stack: {props.stack}</p></div>
  }
  let link = <p className={classes.Company}>{props.company}</p>
  if (props.companyUrl) {
    link = <p className={classes.Company}><Link url={props.companyUrl} linkText={props.company}/></p>
  }
  return (
    <div className={classes.Project}>
      {link}
      <hr/>
      <p className={classes.Tagline}>{props.what}</p>
      <hr/>
      <p>{props.position}</p>
      <hr/>
      <p>{props.description}</p>
      {stack}

      {/* <p>{props.learned}</p> */}
    </div>
  );
};

export default project;
