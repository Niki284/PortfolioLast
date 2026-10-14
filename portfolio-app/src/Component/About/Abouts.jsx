
import { Link } from "react-router-dom";
import "./About.css";

export default function About({ isPreview = false }) {
  return (
    <section className={`about ${isPreview ? "about--preview" : ""}`}>
      <div className="about__container">
        <div className="about__image">
          <img src="/Rectangle.png" alt="Portret van Nikita" />
          <span className="about__image-caption">
            Junior developer in ontwikkeling
          </span>
        </div>

        <div className="about__content">
          <p className="about__eyebrow">OVER MIJ</p>

          <h1 className="about__title">
            Hallo, ik ben <span>Nikita.</span>
          </h1>

          <p className="about__intro">
            Ik ben een student met een passie voor technologie,
            programmeren en het bouwen van gebruiksvriendelijke websites.
          </p>

          <p className="about__paragraph">
            Ik kom uit Wit-Rusland. In mijn vrije tijd houd ik me
            graag bezig met schaken, programmeren, wandelen en tennis.
          </p>

          {!isPreview && (
            <>
              <p className="about__paragraph">
                Ik studeer Elektronica-ICT aan Odisee en volg daarnaast
                de opleiding Graduaat Programmeren aan Arteveldehogeschool.
                Ik ontwikkel mijn vaardigheden door theorie toe te passen
                in praktische projecten.
              </p>

              <p className="about__paragraph">
                Ik werk onder andere met HTML, CSS, SCSS, JavaScript,
                React, Laravel en MySQL. Ik blijf mijn kennis uitbreiden
                en leer graag nieuwe technologieën kennen.
              </p>

              <div className="about__facts">
                <div className="about__fact">
                  <span className="about__fact-label">Focus</span>
                  <span className="about__fact-value">
                    Front-end development
                  </span>
                </div>

                <div className="about__fact">
                  <span className="about__fact-label">Interesses</span>
                  <span className="about__fact-value">
                    Technologie & design
                  </span>
                </div>
              </div>
            </>
          )}

          <div className="about__actions">
            {isPreview ? (
              <Link className="about__button" to="/about">
                Meer over mij <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <Link className="about__button" to="/projecten">
                Bekijk mijn projecten <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}