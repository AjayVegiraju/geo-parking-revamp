import React from 'react';
import '../styles/WhoAreWe.css';

const WhoAreWe = () => {
  return (
    <section className="who-are-we">
      <div className="container">
        <div className="content">
          <h2>Who Are We?</h2>
          <p>
            GeoParking Technologies, Inc. is a leading technology services company focused on accelerating the adoption of electric Autonomous Vehicles (eAVs). Our mission is to help solve climate change by providing innovative, efficient parking lot management solutions that benefit both parking lot owners and the environment. Additionally, our real-time API and strategically located service hubs enhance the operational efficiency of Robotaxi fleets.
          </p>
          <button className="cta-button">Get to know us</button>
        </div>
        <div className="image">
          <img src="src/assets/serviceImage3.jpg" alt="Parking lot aerial view" />
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
