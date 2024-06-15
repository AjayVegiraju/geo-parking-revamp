import React from 'react';
import '../styles/Services.css';
import serviceImage1 from '../assets/tech-exhibition-event-atmosphere.jpg'; // Adjust the path to the actual image
import serviceImage2 from '../assets/serviceImage2.png'; // Adjust the path to the actual image
import serviceImage3 from '../assets/serviceImage3.jpg';

const Services = () => {
    return (
      <section className="services">
        <div className="services-container">
          <div className="service-block">
            <img src={serviceImage1} alt="Service 1" className="service-image" />
            <div className="services-content">
              <h2>Be Part of the Climate Solution</h2>
              <p>
                Join the global fight against climate change by integrating our innovative
                parking lot management solution. By utilizing your parking spaces for 100% green,
                zero-carbon electric Autonomous Vehicles (eAVs), you directly contribute to reducing
                carbon emissions.
              </p>
              <a href="#learn-more" className="learn-more">Learn More <div className='learn-more-arrow'> <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none" className="learn-more-arrow">
            <path d="M1.93994 11.1185L28.6003 11.1185" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0606 1.47057L30 11.1973L18.0606 20.924" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div></a>
            </div>
          </div>
          <div className="service-block reverse">
            <img src={serviceImage2} alt="Service 2" className="service-image" />
            <div className="services-content">
              <h2>Providing Free Untapped Revenue</h2>
              <p>
                Unlock new, effortless revenue streams for your organization without any risk.
                Our platform manages and optimizes your parking lot spaces, allowing eAV Robotaxi
                operators to use them during off-peak times. Enjoy the benefits of additional income
                deposited directly into your bank account, all while you retain full control over your
                parking lot availability.
              </p>
              <a href="#learn-more" className="learn-more">Learn More <div className='learn-more-arrow'> <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none" className="learn-more-arrow">
            <path d="M1.93994 11.1185L28.6003 11.1185" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0606 1.47057L30 11.1973L18.0606 20.924" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div></a>
            </div>
          </div>
          <div className="service-block">
            <img src={serviceImage3} alt="Service 3" className="service-image" />
            <div className="services-content">
              <h2>Streamline Your Parking Operations</h2>
              <p>
                Simplify your parking operations with our advanced management tools.
                Monitor and control your parking facilities with ease, ensuring optimal
                utilization and seamless integration with eAV technology. Improve customer
                satisfaction and operational efficiency with our state-of-the-art solutions.
              </p>
              <a href="#learn-more" className="learn-more">Learn More <div className='learn-more-arrow'> <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none" className="learn-more-arrow">
            <path d="M1.93994 11.1185L28.6003 11.1185" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0606 1.47057L30 11.1973L18.0606 20.924" stroke="#102636" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg></div></a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;