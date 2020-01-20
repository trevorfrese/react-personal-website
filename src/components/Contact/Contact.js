import React, { Component } from 'react';

import classes from './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className={classes.Contact}>
        <div className={classes.ContactInfoBox}>
          <p className={classes.Text}>Get in touch</p>
        </div>
      </div>
    );
  }
}

export default Contact;
