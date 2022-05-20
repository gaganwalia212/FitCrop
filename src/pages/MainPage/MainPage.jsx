import React from 'react';
import classes from './MainPage.module.css';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import Wall from '../../assets/wall.jpg';
const MainPage = () => {
  return (
    <>
      <img src={Wall} className={classes.img} alt="wallpaper" />
      <div className={classes.onImg}>
        <h2>FitCROP</h2>
        <p>A New Agri Perspective</p>
      </div>

      <div className={classes.services}>
        <p>Our Services</p>
        <div className={classes.options}>
          <Link to="/crop_recognition" className={classes.link}>
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
      </div>
    </>
  );
};

export default MainPage;
