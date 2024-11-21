import React from 'react';
import Banner from '../components/AboutBanner';
import AboutDescription from '../components/AboutDescription'
import Footer from '../components/Footer'
import PhilippinesToday from '../components/PhilippinesToday';
import History from '../components/History'


function About() {
  return (
    <div>
      <Banner />
      <AboutDescription />
      <PhilippinesToday /> 
      <History />
      <Footer />
    </div>
  );
}

export default About;
