import HomeBanner from '../assets/home-banner.png';
import AboutBanner from '../assets/about-banner.png';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className={isAboutPage ? 'banner__about' : 'banner__home'}>
      <img
        src={isAboutPage ? AboutBanner : HomeBanner}
        alt={isAboutPage ? 'Bannière avec paysage pour la page À propos' : 'Bannière avec paysage pour la page d\'accueil'}
        className={isAboutPage ? 'banner__about__img' : 'banner__home__img'}
      />
      {!isAboutPage && (
        <h1 className="banner__home__title">
          Chez vous, partout et ailleurs
        </h1>
      )}
    </div>
  );
}
