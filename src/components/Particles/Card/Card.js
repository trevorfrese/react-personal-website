import React from 'react';
import picture from '../../../assets/images/just-face.jpg';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import classes from './Card.css';

// {/* <div className={classes.Card}> */}
  // <p className={classes.CardTitle}>{props.children}</p>
// </div>
const card = (props) => (
  <div className={classes.Card}>
    <Card className={classes.modified}>
      <CardTitle title="SOFTWARE ENGINEER" style={{ textAlign: 'center'}} />
    </Card>
  </div>
);

export default card;
