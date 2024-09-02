import { useLocation } from 'react-router-dom';
import React from 'react';
import { bannerConfig } from './pageConfig';

export default function Banner() {
  const { pathname } = useLocation();
  const { bannerImg, bannerClass, imgClass, title } = bannerConfig[pathname] || bannerConfig.default;

  return (
    <div className={bannerClass}>
      <img
        src={bannerImg}
        alt={`Bannière avec paysage pour la page ${pathname === '/about' ? 'À propos' : "d'accueil"}`}
        className={imgClass}
      />
      {title && <h1 className="banner__home__title">{title}</h1>}
    </div>
  );
}
