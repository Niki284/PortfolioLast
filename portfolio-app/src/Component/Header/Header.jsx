import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ links = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sluit het mobiele menu wanneer de route verandert.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Detailpagina's zijn bereikbaar via een projectkaart.
  const navigationLinks = links.filter(
    (link) =>
      link.name.toLowerCase() !== "detail" &&
      link.name.toLowerCase() !== "contact",
  );

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink
          to="/"
          className="header__brand"
          aria-label="Naar de homepagina"
        >
          <span className="header__brand-mark">N.</span>
          <span className="header__brand-text">
            Portfolio<span className="header__brand-dot">.</span>
          </span>
        </NavLink>

        <button
          className={`header__toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`header__nav ${isOpen ? "is-open" : ""}`}
          aria-label="Hoofdnavigatie"
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `header__link ${isActive ? "is-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink to="/contact" className="header__contact">
            Contact <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export { Header };

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import menuIcon from '../../assets/logo-img/iconmonstr-menu-thin.svg';
// import "./Header.css";

// function Header({ links }) {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const isDetailPage = location.pathname.startsWith("/detail");

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="header">
//       <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
//         <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
//           <img src={menuIcon} alt="menu icon" />
//         </button>
//         <nav className={`menu-nav ${isOpen ? 'show' : 'hide'}`}>
//           <ul>
//             {links.map(link =>
//               isDetailPage && link.name === "Detail" ? null : (
//                 <li key={link.path}>
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export { Header };

// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import menuIcon from '../../assets/logo-img/iconmonstr-menu-thin.svg';
// import "./Header.css"

// function Header({ links }) {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   // Verberg "Detail"-link op deze routes
//   const hideDetail = ["/", "/about", "/projecten", "/contact"].includes(location.pathname);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="header">
//       <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
//         <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
//           <img src={menuIcon} alt="menu icon" />
//         </button>
//         <nav className={`menu-nav ${isOpen ? 'show' : 'hide'}`}>
//           <ul>
//             {links.map(link =>
//               hideDetail && link.name === "Detail" ? null : (
//                 <li key={link.path}>
//                   <NavLink
//                     to={link.path}
//                     className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export { Header };
