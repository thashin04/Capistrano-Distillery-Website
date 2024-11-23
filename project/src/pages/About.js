import React from 'react';
import AboutBanner from '../components/AboutBanner';
import AboutDescription from '../components/AboutDescription'
import Footer from '../components/Footer'
import PhilippinesToday from '../components/PhilippinesToday';
import History from '../components/History'
import ProductAvailabilityTitle from '../components/ProductAvailabilityTitle'
import ProductAvailability from '../components/ProductAvailability'
import CustomerReviews from '../components/CustomerReviews'

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutDescription />
      <PhilippinesToday /> 
      <History />
      <ProductAvailabilityTitle />
      <ProductAvailability />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default About;
