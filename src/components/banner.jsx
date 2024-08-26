import HomeBanner from '../assets/home-banner.png';
import AboutBanner from '../assets/about-banner.png';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  const { pathname } = useLocation();
  const isAboutPage = pathname === '/about';

  return (
    <div className={isAboutPage ? 'banner__about' : 'banner__home'}>
      <img
        src={isAboutPage ? AboutBanner : HomeBanner}
        alt={`Bannière avec paysage pour la page ${isAboutPage ? 'À propos' : "d'accueil"}`}
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
