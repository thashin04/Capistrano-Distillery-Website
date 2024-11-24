import React from 'react';
//import './components/index.css';
import HomeBanner from '../components/Banner'
import Landing from '../components/Landing'
import Product from '../components/Product'
import BestSpiritBanner from '../components/Quote'
import Location from '../components/Location'
import Partner from '../components/Partner'
import PartnerCarousel from '../components/PartnerCarousel';
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <HomeBanner />
      <Landing />
      <Product />
      <BestSpiritBanner />
      <Location />
      <Partner />
      <PartnerCarousel />
      <Footer />
    </div>
  );
}

export default Home;