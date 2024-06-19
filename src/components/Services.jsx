import React from "react";
import "../styles/Services.css";
import serviceImage1 from "../assets/tech-exhibition-event-atmosphere.jpg"; // Adjust the path to the actual image
import serviceImage2 from "../assets/3d-smartphone-device-with-map-gps-technology.jpg"; // Adjust the path to the actual image
import serviceImage3 from "../assets/serviceImage3.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <div className="service-block">
          <img src={serviceImage1} alt="Service 1" className="service-image" />
          <div className="services-content">
            <h2>Be Part of the Climate Solution</h2>
            <p>
              Join the global fight against climate change by integrating our
              innovative parking lot management solution. By allowing a small
              number of your unused parking spaces to be used for 100% green,
              zero-carbon electric Autonomous Vehicles (eAVs)/Robotaxis, you
              directly contribute to reducing carbon emissions and making
              door-to-door transportation affordable for all.
            </p>
          </div>
        </div>
        <div className="service-block reverse">
          <img src={serviceImage2} alt="Service 2" className="service-image" />
          <div className="services-content">
            <h2>Providing You Free Untapped Revenue</h2>
            <p>
              For zero cost, zero effort, and zero risk, you can unlock a new
              revenue stream for your organization. Use the GeoParking
              Technologies platform for FREE to manage and optimize your parking
              lot the way you want for Autonomous Vehicles, Robotaxis, and
              today's ride-share companies. Our platform manages and optimizes
              your parking lot spaces, allowing eAV Robotaxi operators to use
              them during off-peak times. Enjoy the benefits of additional
              income deposited directly into your bank account, all while you
              retain full control over your parking lot availability.
            </p>
          </div>
        </div>
        <div className="service-block">
          <img src={serviceImage3} alt="Service 3" className="service-image" />
          <div className="services-content">
            <h2>Streamline Your Parking Operations</h2>
            <p>
              Enhance your parking lot's efficiency and service quality with our
              advanced Robotaxi and rideshare management system. You can
              designate specific areas for eAV Robotaxis and rideshare pick-ups
              and drop-offs (with multiple related entrances and exits), as well
              as parking spaces for eAVs/Robotaxis only (no human drivers) and
              when allowed to park (with multiple related entrances and exits).
              The GeoParking Technologies system allows you to manage as little
              or as much as you like. You can set the scheduling for parking
              spots and designate the locations for everything, giving you a
              hassle-free solution that maximizes the utility of your parking
              lot and improves the experience for people coming to and going
              from your facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
