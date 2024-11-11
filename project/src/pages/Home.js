import React from 'react';
import '../index.css'
import Banner from '../components/Banner'
import Landing from '../components/Landing'
import Product from '../components/Product'
import Location from '../components/Location'

function Home() {
  return (
    <div>
      <Banner />
      <Landing />
      <Product />
      <Location />
    </div>
  );
}

export default Home;