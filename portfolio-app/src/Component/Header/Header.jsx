import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import menuIcon from '../../assets/logo-img/iconmonstr-menu-thin.svg';
import "./Header.css";

function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const shouldHideLink = (link) =>
    link.name === "Detail"; // Verberg 'Detail' altijd uit de navigatie

  return (
    <header className="header">
      <div className={`menu-wrapper ${isOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <img src={menuIcon} alt="menu icon" />
        </button>
        <nav className={`menu-nav ${isOpen ? 'show' : 'hide'}`}>
          <ul>
            {links.map(link =>
              shouldHideLink(link) ? null : (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>
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

