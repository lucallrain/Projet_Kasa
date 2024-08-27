
import { useLocation } from 'react-router-dom';

function getPageSpecificData(pathname) {
  const isAboutPage = pathname === '/about';

  return {
    bannerImg: isAboutPage ? require('../assets/about-banner.png') : require('../assets/home-banner.png'),
    bannerClass: isAboutPage ? 'banner__about' : 'banner__home',
    imgClass: isAboutPage ? 'banner__about__img' : 'banner__home__img',
    title: !isAboutPage ? 'Chez vous, partout et ailleurs' : '',
  };
}

export default function Banner() {
  const { pathname } = useLocation();
  const { bannerImg, bannerClass, imgClass, title } = getPageSpecificData(pathname);

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
