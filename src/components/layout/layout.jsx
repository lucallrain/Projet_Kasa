import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomeLogo from '../../assets/home-logo.png';
import AboutLogo from '../../assets/about-logo.png';


const navLinks = [
  { path: '/', label: 'Accueil', logo: HomeLogo },
  { path: '/about', label: 'À propos', logo: AboutLogo },
];

const Layout = () => (
  <>
    <Header navLinks={navLinks} defaultLogo={HomeLogo} />
    <div className="content">
      <Outlet /> {}
    </div>
    <Footer />
  </>
);

export default Layout;
