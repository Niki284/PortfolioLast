import React from 'react';
import Button from '../Buttons';

const Card = ({ data, hiddenButton }) => {
  return (
    <div className="Card">
      <div className="Card__logo">
        <img src={process.env.PUBLIC_URL + data.picture} alt={data.name} />
        <span className="Card__year">{data.year}</span>
      </div>
      <div className="Card__text">
        <h2>{data.name}</h2>
        <p>{data.info}</p>
        {!hiddenButton && <Button link={data.id} />}
      </div>
    </div>
  );
};

export default Card;


