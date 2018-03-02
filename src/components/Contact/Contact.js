import React from 'react';

import classes from './Contact.css';

const contact = (props) => (
  <div className={classes.Contact}>
    <div className={classes.Info}>
      <p className={classes.Text}>I'm in Los Angeles.</p>
      <p className={classes.Text}>I love ramen.</p>
      <p className={classes.Text}>Let's get in touch.</p>
    </div>
  </div>
);

export default contact;
