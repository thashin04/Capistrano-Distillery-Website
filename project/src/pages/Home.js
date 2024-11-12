import React from 'react';
import '../index.css'
import Banner from '../components/Banner'
import Landing from '../components/Landing'
import Product from '../components/Product'
import Location from '../components/Location'
import Partner from '../components/Partner'

function Home() {
  return (
    <div>
      <Banner />
      <Landing />
      <Product />
      <Location />
      <Partner />
    </div>
  );
}

export default Home;