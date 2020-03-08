import React, { Component } from 'react';

import classes from './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className={classes.Contact}>
        <div className={classes.ContactInfoBox}>
          <p className={classes.Text}>👋&nbsp; GET IN TOUCH </p>
          <div className={classes.ContactMethods}>
            <div className={classes.ContactMethod}>
              <div className={classes.Text}>
                🎬&nbsp; I REVIEW CONCERTS
              </div>
            </div>
            <div className={classes.ContactMethod}>
              <div className={classes.Text}>
                📚&nbsp; I REVIEW BOOKS
              </div>
            </div>
            <div className={classes.ContactMethod}>
              <div className={classes.Text}>
                🎵&nbsp; I MAKE MUSIC
              </div>
            </div>
            <div className={classes.ContactMethod}>
              <div className={classes.Text}>
                💌&nbsp; MY WEEKLY NEWSLETTER
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
