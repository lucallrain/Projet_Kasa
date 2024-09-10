import Banner from '../components/banner/banner';
import Card from '../components/card/card';
import HomeBanner from '../assets/home-banner.png';

export default function Home() {
  return (
    <div className='home__container'>
      <Banner
        bannerImg={HomeBanner}
        bannerClass="banner__home"
        imgClass="banner__home__img"
        title="Chez vous, partout et ailleurs"
        altText="Bannière avec paysage pour la page d'accueil"
      />
      <Card />
    </div>
  );
}
