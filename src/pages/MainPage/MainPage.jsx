import React from 'react';
import classes from './MainPage.module.css';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className={classes.options}>
      <Link to="/" className={classes.link}>
        <Card title="Crop Recognition" />
      </Link>
      <Link to="/crop_recommend" className={classes.link}>
        <Card title="Crop Recommendation" />
      </Link>
      <Link to="/disease_rec" className={classes.link}>
        <Card title="Disease Recognition" />
      </Link>
      <Link to="/fertilizer_recommend" className={classes.link}>
        <Card title="Fertilizer Recommendation" />
      </Link>
    </div>
  );
};

export default MainPage;
