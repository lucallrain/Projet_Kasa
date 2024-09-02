import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { headerConfig } from './pageConfig';

export default function Header() {
  const { pathname } = useLocation();
  const { logoImg, linkClass, title } = headerConfig[pathname] || headerConfig.default;

  return (
    <nav className="navBar">
      <Link to="/">
        <img src={logoImg} alt="Logo Kasa" className="navBar__logo" />
      </Link>
      <div className="navBar__routes">
        <Link className={`navBar__routes__link ${pathname === '/' ? linkClass : ''}`} to="/">
          Accueil
        </Link>
        <Link className={`navBar__routes__link ${pathname === '/about' ? linkClass : ''}`} to="/about">
          À propos
        </Link>
      </div>
    </nav>
  );
}
