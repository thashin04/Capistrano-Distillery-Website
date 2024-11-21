import React from 'react';
import Banner from '../components/AboutBanner';
import AboutDescription from '../components/AboutDescription'
import Footer from '../components/Footer'
import PhilippinesToday from '../components/PhilippinesToday';

function About() {
  return (
    <div>
      <Banner />
      <AboutDescription />
      <PhilippinesToday /> 
      <Footer />
    </div>
  );
}

export default About;
