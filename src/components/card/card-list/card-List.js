import React from 'react';
// import room from '../../../images/room.jpg';
// import star from '../../../images/Star 1.png';

const CardList = ({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  star,
}) => {
  return (
    <>
      <img src={img} alt="aretha" className="image" />
      <div className="star">
        <div>{title}</div>
        <img src={star} alt="aretha" className="starImage" />
        <span>{rating}</span>
        <span>{reviewCount}</span>
        <span>{country}</span>
      </div>
      <p>the best rates</p>
      <p>{price}</p>
    </>
  );
};

export default CardList;
