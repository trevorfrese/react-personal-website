import React from 'react';

import classes from './Project.css';

const project = (props) => {
  let stack = ''
  if (props.stack) {
    stack = <div><hr/><p className={classes.Stack}>Stack: {props.stack}</p></div>
  }
  return (
    <div className={classes.Project}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={classes.Link}
        href={props.companyUrl}>
        <p className={classes.Company}>{props.company}</p>
      </a>
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
