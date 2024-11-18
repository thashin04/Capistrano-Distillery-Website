import React from 'react';
import '../index.css'
import Banner from '../components/Banner'
import Landing from '../components/Landing'
import Product from '../components/Product'
import Location from '../components/Location'
import Partner from '../components/Partner'
import PartnerCarousel from '../components/PartnerCarousel';
import Footer from '../components/Footer'

function Product() {
  return (
    <div>
      <Banner />
      <Landing />
      <Product />
      <Location />
      <Partner />
      <PartnerCarousel />
      <Footer />
    </div>
  );
}

export default Product;