import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import Inputs from '../Component/Inputs';
import discordimg from '../assets/logo-img/iconmonstr-discord-5.svg';
import github from '../assets/logo-img/iconmonstr-github-5.svg';
import linkedin from '../assets/logo-img/iconmonstr-linkedin-5.svg';
import mapImage from '../assets/logo-img/map-placeholder.jpg';
import './Contact.css';

const inputData = {
  Firstname: 'Voornaam',
  Lastname: 'Achternaam',
  Email: 'E-mail',
  Gsm: 'Telefoonnummer',
};

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus('');
    setIsSending(true);

    const form = event.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );
    

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('E-mail verzenden mislukt:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-container">
      <header className="contact-heading">
        <p className="contact-eyebrow">NEEM CONTACT OP</p>
        <h1 className="contact-title">Laten we samenwerken.</h1>
        <p className="contact-intro">
          Heb je een vraag, een projectidee of wil je kennismaken?
          Stuur me gerust een bericht.
        </p>
      </header>

      <div className="contact-grid">
        <section className="contact-left">
          <div className="contact-card">
            <h2>Contactgegevens</h2>
            <p className="contact-description">
              Je kunt me bereiken via mijn sociale media of door
              het contactformulier in te vullen.
            </p>

            <div className="contact-map">
              <img src={mapImage} alt="Locatie op de kaart" />
              <p className="contact-address">
                Kopkapelstraat 123<br />
                1000 Lokeren<br />
                België
              </p>
            </div>

            <h3>Vind me online</h3>

            <ul className="social-media">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Niki284"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/AmGMzdVf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <img src={discordimg} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Stuur een bericht</h2>

            <div className="contact-form-grid">
              {Object.entries(inputData).map(([key, label]) => (
                <Inputs key={key} data={[key, label]} />
              ))}
            </div>

            <div className="input-group">
              <label htmlFor="message">Bericht</label>
              <textarea
                id="message"
                name="message"
                placeholder="Waarmee kan ik je helpen?"
                rows="6"
                required
                minLength={10}
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? 'Bezig met verzenden...' : 'Verstuur bericht'}
              {!isSending && <span aria-hidden="true"> →</span>}
            </button>

            {status === 'success' && (
              <p className="contact-status success" role="status">
                Je bericht is verzonden. Bedankt voor je contact!
              </p>
            )}

            {status === 'error' && (
              <p className="contact-status error" role="alert">
                Je bericht kon niet worden verzonden. Probeer het opnieuw.
              </p>
            )}
          </form>
        </section>
      </div>
    </main>
  );
};

export { Contact };




// import React from 'react';
// import Inputs from '../Component/Inputs';
// import discordimg from '../assets/logo-img/iconmonstr-discord-5.svg';
// import github from '../assets/logo-img/iconmonstr-github-5.svg';
// import linkendin from '../assets/logo-img/iconmonstr-linkedin-5.svg';
// import mapImage from '../assets/logo-img/map-placeholder.jpg'; 
// import './Contact.css';
// import '../Component/About/About.css';


// const inputData = {
//   Firstname: "Voornaam",
//   Lastname: "Achternaam",
//   Email: "E-mail",
//   Gsm: "Telefoonnummer"
// };

// const Contact = () => {
//   return (
//     <div className="main">
//     <div className="contact-container">
//       <h1 className="contact-title">Contact Me</h1>

//       <div className="contact-grid">
//         {/* Linkerkolom */}
//         <div className="contact-left">
//           <div className="contact-map">
//             <img src={mapImage} alt="Kaart locatie" />
//             <p className="contact-address">
//               Kopkapelstraat 123<br />
//               1000 Lokeren<br />
//               België
//             </p>
//           </div>

//           <ul className="social-media">
//             <li className="linkedin"><a href="https://www.linkedin.com"><img src={linkendin} alt="LinkedIn" /></a></li>
//             <li className="github"><a href="https://github.com/Niki284"><img src={github} alt="GitHub" /></a></li>
//             <li className="discord"><a href="https://discord.gg/AmGMzdVf"><img src={discordimg} alt="Discord" /></a></li>
//           </ul>
//         </div>

//         {/* Rechterkolom */}
//         <div className="contact-right">
//           <form className="contact-form">
//             {Object.entries(inputData).map(([key, label]) => (
//               <Inputs key={key} data={[key, label]} />
//             ))}
//                   <button type="submit" className="about__button">Versturen</button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export { Contact };

