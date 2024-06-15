import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import HowItWorks from './components/HowItWorks';
import WhoAreWe from './components/WhoAreWe';
import Footer from './components/Footer';
import FleetEfficiency from './components/FleetEfficiency';

const App = () => (
  <div>
    <Header />
    <HeroSection />
    <Services />
    <HowItWorks />
    <WhoAreWe />
    <FleetEfficiency />
    <ContactUs/>
    <Footer />
  </div>
);

export default App;
