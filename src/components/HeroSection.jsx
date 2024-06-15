import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/futuristic-autonomous-car-driving-through-city.png';

const HeroSection = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>PARKING FOR A</h1>
      <h1 className="green-gradient">GREENER FUTURE</h1>
      <p className="sub-text">
        Transform your Parking Lots by Embracing sustainability and making them
        more efficient with Robotaxi eAVs
      </p>
      <button className="hero-button">Sign Up Today!</button>
    </div>
    <div className="hero-image">
      <img src={heroImage} alt="Autonomous car driving through city" />
    </div>
  </section>
);

export default HeroSection;
