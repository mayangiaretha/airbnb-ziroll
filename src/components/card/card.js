import React from 'react';
import CardList from './card-list/card-List';
import room from '../../images/room.jpg';
import passport from '../../images/passports.jpg';
import sight from '../../images/sights.jpg';
import star from '../../images/Star 1.png';
import './card.css';
import cardData from './data.json';

const Card = () => {
  return (
    <div className="card">
      {cardData.map((data, i) => {
        const { rating, reviewCount, country, title, price } = data;
        return (
          <CardList
            img={i === 0 ? room : i === 1 ? passport : sight}
            star={star}
            rating={rating}
            reviewCount={reviewCount}
            country={country}
            title={title}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default Card;
