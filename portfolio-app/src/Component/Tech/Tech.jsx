import data from "../../data/technologies.json";
import "./Tech.css";

import img1 from "../../assets/logo-tech/image 1-1.svg";
import img2 from "../../assets/logo-tech/image 1-2.svg";
import img3 from "../../assets/logo-tech/image 1-3.svg";
import img4 from "../../assets/logo-tech/image 1-4.svg";
import img5 from "../../assets/logo-tech/image 1-5.svg";
import img6 from "../../assets/logo-tech/image 1-6.svg";
import img7 from "../../assets/logo-tech/image 1-7.svg";
import img8 from "../../assets/logo-tech/image 1.svg";

const iconMap = {
  "image 1-1.svg": img1,
  "image 1-2.svg": img2,
  "image 1-3.svg": img3,
  "image 1-4.svg": img4,
  "image 1-5.svg": img5,
  "image 1-6.svg": img6,
  "image 1-7.svg": img7,
  "image 1.svg": img8,
};

function TechSection({ title, description, items }) {
  return (
    <section className="tech-content">
      <div className="tech-content__heading">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="tech-content__list">
        {items.map((item) => (
          <article className="tech-item" key={item.name}>
            <div className="tech-item__icon">
              {iconMap[item.icon] ? (
                <img src={iconMap[item.icon]} alt="" />
              ) : (
                <span aria-hidden="true">{"</>"}</span>
              )}
            </div>

            <div className="tech-item__body">
              <div className="tech-item__heading">
                <h4>{item.name}</h4>
                {item.niveau && (
                  <span className="tech-item__level">
                    {item.niveau}
                  </span>
                )}
              </div>

              {item.niveau && (
                <div
                  className="tech-item__bar"
                  role="img"
                  aria-label={`${item.name}: niveau ${item.niveau}`}
                >
                  <div
                    className="tech-item__fill"
                    style={{ width: item.niveau }}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Tech() {
  return (
    <section className="tech-section">
      <div className="tech-section__intro">
        <p className="tech-section__eyebrow">MIJN VAARDIGHEDEN</p>
        <h2 className="tech-section__title">
          Technologie waarmee ik werk
        </h2>
        <p className="tech-section__description">
          De tools en technologieën die ik gebruik om websites
          en applicaties te ontwikkelen.
        </p>
      </div>

      <div className="tech">
        <TechSection
          title="Frameworks & tools"
          description="Technologieën voor het bouwen van applicaties."
          items={data.frameworks}
        />

        <TechSection
          title="Programmeertalen"
          description="Talen waarmee ik interfaces en functionaliteit ontwikkel."
          items={data.languages}
        />
      </div>
    </section>
  );
}