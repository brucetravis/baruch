import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import FooterTwo from './components/common/footer/footertwo/FooterTwo';
import SlideInOnScroll from './components/slideinonscroll/SlideInOnScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SlideInOnScroll>
      <Header />
    </SlideInOnScroll>
      <App />
    <SlideInOnScroll>
      <Footer />
    </SlideInOnScroll>
    <SlideInOnScroll>
      <FooterTwo />
    </SlideInOnScroll>
    </BrowserRouter>
  </React.StrictMode>
);

