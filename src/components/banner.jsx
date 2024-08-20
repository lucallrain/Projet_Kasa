import HomeBanner from '../assets/home-banner.png'
import AboutBanner from '../assets/about-banner.png'
import { useLocation } from 'react-router-dom'

export default function Banner() {
  const location = useLocation()
  if (location.pathname === '/about') {
    return (
      <div className="banner__about">
        <img
          src={AboutBanner}
          alt="bannière avec paysage"
          className="banner__about__img"
        />
      </div>
    )
  } else {
    return (
      <div className="banner__home">
        <img
          src={HomeBanner}
          alt="bannière avec paysage"
          className="banner__home__img"
        />
        <h1 className="banner__home__title">Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
}