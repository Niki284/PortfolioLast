import React from "react";
import "./CardDetail.css"
const CardDetail = ({ data }) => {
  return (
    <div className="CardDetail">
      <div className="CardDetail__image">
        <img src={process.env.PUBLIC_URL + data.picture} alt={data.name} />
      </div>
      <div className="CardDetail__content">
        <h2>{data.name}</h2>
        <p>{data.info}</p>
        <div className="CardDetail__links">
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {data.website && (
            <a href={data.website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
