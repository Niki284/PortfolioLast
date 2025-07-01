import React from 'react';
import dinst from '../../assets/logo-img/dinst.png';
import dinst2 from '../../assets/logo-img/dinst2.png';
import "./Diensten.css"

function Diensten() {
  return (
    <div className="main">
      <h1 className="contact--title">Diensten</h1>

      <div className="dinst">
        <div className="dinst__card">
          <div className="dinst__logo">
            <img src={dinst} alt="Front-end logo" />
          </div>
          <div className="dinst__text">
            <h3 className="dinst__title">Front-end</h3>
            <p className="dinst__description">
              Ik ben ervaren in front-end development. Ik kan moderne websites ontwerpen en bouwen, en anderen helpen met zowel design als code.
            </p>
          </div>
        </div>

        <div className="dinst__card">
          <div className="dinst__logo">
            <img src={dinst2} alt="Elektriciteit logo" />
          </div>
          <div className="dinst__text">
            <h3 className="dinst__title">Elektriciteit</h3>
            <p className="dinst__description">
              Ik heb ervaring als elektricien en heb gewerkt bij GIEC aan verschillende installaties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diensten;
