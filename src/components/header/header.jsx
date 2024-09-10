import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './header.scss';

export default function Header({ navLinks, defaultLogo }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const currentLink = navLinks.find(link => link.path === location.pathname);
  const currentLogo = currentLink ? currentLink.logo : defaultLogo;

  return (
    <nav className="navBar">
      <Link to="/">
        <img src={currentLogo} alt="Site Logo" className="navBar__logo" />
      </Link>
      <div className="navBar__routes">
        {navLinks.map(link => (
          <Link
            key={link.path}
            className={`navBar__routes__link ${activeLink === link.path ? 'underline' : ''}`}
            to={link.path}
            onClick={() => setActiveLink(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
