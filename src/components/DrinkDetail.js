import React from "react";
import classes from './drinkdetail.module.css';

const DrinkDetail = ({ title, description, date, image, alt }) => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <img src={image} alt={alt} className={classes.img} />
    </div>
  );
};

export default DrinkDetail;
