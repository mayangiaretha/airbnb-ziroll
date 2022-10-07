import React from 'react';
import airbnb from '../../images/airbnb.jpg';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <img src={airbnb} alt="aretha" className="airLogo" />
      <h1 className="heading">Online Experiences</h1>
      <p className="paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Main;
