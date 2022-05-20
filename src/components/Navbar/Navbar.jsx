import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="title">
        <NavLink className={(isActive) => 'title_link'} to="/">
          FitCROP
        </NavLink>
      </div>
      <div className="nav_links">
        <NavLink
          to="/crop_recognition"
          className={({isActive}) => ('link ' + (isActive===true ? 'selected' : ''))}
        >
          Crop Recognition
        </NavLink>
        <NavLink
          to="/crop_recommend"
          className={({isActive}) => {return ('link ' + (isActive===true ? 'selected' : ''))}}
        >
          Crop Recommendation
        </NavLink>
        <NavLink
          to="/disease_rec"
          className={({isActive}) => ('link ' + (isActive===true ? 'selected' : ''))}
        >
          Disease Recognition
        </NavLink>
        <NavLink
          to="/fertilizer_recommend"
          className={({isActive}) => ('link ' + (isActive===true ? 'selected' : ''))}
        >
          Fertilizer Recommendation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
