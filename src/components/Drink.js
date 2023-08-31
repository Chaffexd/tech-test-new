import React from "react";
import classes from './drink.module.css';

const Drink = ({ title, description, date, image, alt }) => {

  return (
    <article>
      <h1 className={classes.title}>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <img src={image} alt={alt} className={classes.img} />
    </article>
  );
};

export default Drink;
