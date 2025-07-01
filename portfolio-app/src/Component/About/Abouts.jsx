import React from 'react';
import './About.css';

export default function About({ isPreview }) {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img src="Rectangle.png" alt="Foto van Nikita" />
        </div>

        <div className="about__content">
          <h2>Mijn naam is Nikita</h2>
          <p>
            Ik ben 22 jaar oud en ik kom uit Wit-Rusland. Mijn hobby’s zijn schaken, programmeren, wandelen en tennis.
          </p>

          {!isPreview && (
            <>
              <p>
                Ik studeer Elektronica-ICT aan Odisee en Graduaat programmeren aan Arteveldehogeschool.
              </p>
              <p>
                Technologieën: Laravel, HTML, CSS, SCSS, JavaScript, MySQL, React.
              </p>
              <p>
                Projecten: Snake Game, Gentse Feesten website.
              </p>
            </>
          )}

          {isPreview && (
            <div className="about__button-wrapper">
              <a className="about__button" href="/about">Meer bekijken →</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


// import React from 'react';
// import './About.css';

// export default function About({ isPreview }) {
//   return (
//     <section className="about">
//       <div className="about__container">
//         <div className="about__image">
//           <img src="Rectangle.png" alt="Foto van Nikita" />
//         </div>

//         <div className="about__content">
//           <h2 className="about__title">Mijn naam is Nikita</h2>

//           <p className="about__paragraph">
//             Ik ben 22 jaar oud en ik kom uit Wit-Rusland. Mijn hobby’s zijn schaken, programmeren, wandelen en tennis.
//           </p>

//           {!isPreview && (
//             <>
//               <p className="about__paragraph">
//                 Ik studeer Elektronica-ICT aan Odisee en Graduaat programmeren aan Arteveldehogeschool.
//               </p>
//               <p className="about__paragraph">
//                 Technologieën: Laravel, HTML, CSS, SCSS, JavaScript, MySQL, React.
//               </p>
//               <p className="about__paragraph">
//                 Projecten: Snake Game, Gentse Feesten website.
//               </p>
//             </>
//           )}

//           <div className="about__button-wrapper">
//             <a className="about__button" href="/about">
//               {isPreview ? 'Meer bekijken →' : 'Bekijk mijn werk'}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react'
// import "./About.css"

// export default function Abouts() {
//   return (
//     <div className='info'>
//       <div className='info__img'>
//         <img src="Rectangle.png" alt="" />
//       </div>
        
//         <div className='info__text'>
//             <h2>Mijn naam is Nikita
//             </h2>
//             <p>
//            Ik ben 22 jaar oud. Ik kom uit Wit-Rusland. 
//     Mijn hobby’s zijn schaken, programmeren , lopen en tennis met vrienden.
//     Mijn studies zijn : Elektronica-ICT – ICT op de Technologiecampus Odisee in Gent en Graduaat programmeren aan de Artevelde Hogeschool in Gent.
//     Ik wil graag later werken als front-end als ook back-end en designer.
//     Ik wil graag problemen analyseren en ze oplossen door de kennis toe te passen die ik heb. 
//     De Technologieën waar ik kennis van heb en mee kan werken zijn laravel, html ,css ,scss, js , 
//     mysql en react. Ik heb al enkele projecten gemaakt waaronder Snake game en Gentse feesten.

//             </p>
//         </div>
//     </div>
//   )
// }
