import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="number">01</div>
            <h3>Sign Up and Designate Spaces</h3>
            <p>
              Easily sign up and specify the areas and times your parking lot is available for eAV Robotaxi use.
            </p>
            <button className="sign-up-button">Sign Up Today!</button>
          </div>
          <div className="step">
            <div className="number">02</div>
            <h3>We Do the Work</h3>
            <p>
              Our platform manages everything, from integrating your lot into our system to coordinating with Robotaxi operators.
            </p>
          </div>
          <div className="step">
            <div className="number">03</div>
            <h3>Get Involved in Sustainability</h3>
            <p>
              Contribute to a cleaner, greener future by supporting the use of zero-carbon vehicles in your parking lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
