import { Link } from "react-router-dom";
import dinst from "../../assets/logo-img/dinst.png";
import dinst2 from "../../assets/logo-img/dinst2.png";
import "./Diensten.css";

const services = [
  {
    title: "Front-end development",
    description:
      "Ik bouw responsive websites met HTML, CSS, JavaScript en React. Ik besteed aandacht aan gebruiksvriendelijkheid, structuur en een consistente vormgeving.",
    image: dinst,
    alt: "Front-end development",
    tags: ["HTML & CSS", "JavaScript", "React"],
  },
  {
    title: "Elektriciteit",
    description:
      "Naast programmeren heb ik praktische ervaring met elektriciteit en installaties. Ik werkte bij GIEC en leerde er nauwkeurig en oplossingsgericht te werken.",
    image: dinst2,
    alt: "Elektriciteit en technische installaties",
    tags: ["Techniek", "Praktijkervaring"],
  },
];

export default function Diensten() {
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__intro">
          <p className="services__eyebrow">WAT IK MEEBRENG</p>
          <h2 className="services__title">
            Mijn vaardigheden en ervaring
          </h2>
          <p className="services__description">
            Een combinatie van digitale ontwikkeling, technisch inzicht
            en praktische ervaring.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__icon">
                <img src={service.image} alt="" />
              </div>

              <h3 className="service-card__title">
                {service.title}
              </h3>

              <p className="service-card__description">
                {service.description}
              </p>

              <ul className="service-card__tags" aria-label="Vaardigheden">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <p>Benieuwd naar wat ik heb gemaakt?</p>
          <Link to="/projecten" className="services__button">
            Ontdek mijn projecten <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}