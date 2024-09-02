import homeLogo from '../assets/home-logo.png';
import aboutLogo from '../assets/about-logo.png';
import homeBanner from '../assets/home-banner.png';
import aboutBanner from '../assets/about-banner.png';

export const headerConfig = {
  '/': {
    logoImg: homeLogo,
    linkClass: 'underline',
    title: 'Accueil',
  },
  '/about': {
    logoImg: aboutLogo,
    linkClass: 'underline',
    title: 'À propos',
  },

  default: {
    logoImg: homeLogo,
    linkClass: '',
    title: '',
  },
};

export const bannerConfig = {
  '/': {
    bannerImg: homeBanner,
    bannerClass: 'banner__home',
    imgClass: 'banner__home__img',
    title: 'Chez vous, partout et ailleurs',
  },
  '/about': {
    bannerImg: aboutBanner,
    bannerClass: 'banner__about',
    imgClass: 'banner__about__img',
    title: '',
  },

  default: {
    bannerImg: homeBanner,
    bannerClass: 'banner__home',
    imgClass: 'banner__home__img',
    title: '',
  },
};
