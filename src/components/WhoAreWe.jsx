import React from "react";
import { Link } from "react-scroll";
import "../styles/WhoAreWe.css";
import serviceImage3 from "../assets/3d-icon-traveling-vacation (1).jpg";

const WhoAreWe = () => {
  return (
    <section className="who-are-we">
      <div className="container">
        <div className="content">
          <h2>Who Are We?</h2>
          <p>
            GeoParking Technologies, Inc. is a leading technology services
            company focused on accelerating the adoption of electric Autonomous
            Vehicles (eAVs)/Robotaxis. Our mission is to help fight climate
            change by providing innovative, efficient parking lot management
            solutions that benefit both parking lot owners and the environment.
            Additionally, our real-time API, strategically located drive-through
            charging stations and service hubs enhance the operational
            efficiency of Robotaxi fleets.
          </p>
          <Link to="contact-us" smooth={true} duration={200}>
            <button className="cta-button">Get to know us</button>
          </Link>
        </div>
        <div className="image">
          <img src={serviceImage3} alt="Parking lot aerial view" />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
