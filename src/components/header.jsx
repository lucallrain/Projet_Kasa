
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function getPageSpecificData(pathname) {
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';

  return {
    logoImg: isHomePage ? require('../assets/home-logo.png') : require('../assets/about-logo.png'),
    homeLinkClass: isHomePage ? 'underline' : '',
    aboutLinkClass: isAboutPage ? 'underline' : '',
  };
}

export default function Header() {
  const { pathname } = useLocation();
  const { logoImg, homeLinkClass, aboutLinkClass } = getPageSpecificData(pathname);

  return (
    <nav className="navBar">
      <Link to="/">
        <img src={logoImg} alt="Logo Kasa" className="navBar__logo" />
      </Link>
      <div className="navBar__routes">
        <Link className={`navBar__routes__link ${homeLinkClass}`} to="/">
          Accueil
        </Link>
        <Link className={`navBar__routes__link ${aboutLinkClass}`} to="/about">
          A propos
        </Link>
      </div>
    </nav>
  );
}
