
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              N<span>.</span>
            </Link>

            <h2>Bedankt voor je bezoek.</h2>

            <p>
              Op zoek naar een junior front-end developer?
              Ik kom graag met je in contact.
            </p>
          </div>

          <div className="footer__contact">
            <h3>Contact</h3>

            <a href="mailto:dymovichnikita@gmail.com">
              dymovichnikita@gmail.com
            </a>

            <a href="tel:+32472554036">
              +32 472 55 40 36
            </a>
          </div>

          <nav className="footer__navigation" aria-label="Footernavigatie">
            <h3>Navigatie</h3>

            <Link to="/">Home</Link>
            <Link to="/about">Over mij</Link>
            <Link to="/projecten">Projecten</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Portfolio. Alle rechten voorbehouden.
          </p>

          <a className="footer__back-to-top" href="#top">
            Terug naar boven ↑
          </a>
        </div>
      </div>
    </footer>
  );
};