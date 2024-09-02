import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Error from './components/error/error';
import Accommodation from './components/accommodation/accommodation';
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className='content'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)