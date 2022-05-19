import React from 'react';
import classes from './Card.module.css';
const Card = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
    </div>
  );
};

export default Card;
