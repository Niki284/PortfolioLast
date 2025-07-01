import React from 'react';
import Inputs from '../Component/Inputs';
import discordimg from '../assets/logo-img/iconmonstr-discord-5.svg';
import github from '../assets/logo-img/iconmonstr-github-5.svg';
import linkendin from '../assets/logo-img/iconmonstr-linkedin-5.svg';
import mapImage from '../assets/logo-img/map-placeholder.jpg'; 
import './Contact.css';
import '../Component/About/About.css';


const inputData = {
  Firstname: "Voornaam",
  Lastname: "Achternaam",
  Email: "E-mail",
  Gsm: "Telefoonnummer"
};

const Contact = () => {
  return (
    <div className="main">
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-grid">
        {/* Linkerkolom */}
        <div className="contact-left">
          <div className="contact-map">
            <img src={mapImage} alt="Kaart locatie" />
            <p className="contact-address">
              Examplestraat 123<br />
              1000 Brussel<br />
              België
            </p>
          </div>

          <ul className="social-media">
            <li className="linkedin"><a href="https://www.linkedin.com"><img src={linkendin} alt="LinkedIn" /></a></li>
            <li className="github"><a href="https://github.com/Niki284"><img src={github} alt="GitHub" /></a></li>
            <li className="discord"><a href="https://discord.gg/AmGMzdVf"><img src={discordimg} alt="Discord" /></a></li>
          </ul>
        </div>

        {/* Rechterkolom */}
        <div className="contact-right">
          <form className="contact-form">
            {Object.entries(inputData).map(([key, label]) => (
              <Inputs key={key} data={[key, label]} />
            ))}
                  <button type="submit" className="about__button">Versturen</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export { Contact };

