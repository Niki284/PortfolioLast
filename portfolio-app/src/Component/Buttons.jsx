import React from 'react';
import { Link } from 'react-router-dom';

export default function Buttons({ link }) {
  return (
    <div className="button-about__button-wrapper">
      <Link className="about__button" to={`/detail/${link}`}>
        Meer bekijken →
      </Link>
    </div>
  );
}

