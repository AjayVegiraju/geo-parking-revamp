import React from 'react';
import '../styles/FleetEfficiency.css';
import serviceImage3 from '../assets/futuristic-autonomous-car-navigating-highspeed-city-traffic-look-into-future-urban-transport.jpg';

const FleetEfficiencySection = () => {
    return (
        <section className="fleet-efficiency">
            <div className="container">
                <div className="content">
                    <h1>Maximize Your Robotaxi Fleet Efficiency</h1>
                    <hr className="underline" />
                    <div className="text-image-row">
                        <div className="image-container">
                            <img src={serviceImage3} alt="Parking lot" />
                        </div>
                        <div className="text-container">
                            <h2>Optimize Operations with GeoParking's Advanced Solutions</h2>
                            <p>GeoParking Technologies provides a B2B technology platform that accelerates the mass adoption and increases the efficiency of Robotaxi fleets. Our solution offers real-time information about the location, availability, and cost of eAV parking at special Robotaxi-only parking sites across the U.S., Canada, and internationally.</p>
                            <ul>
                                <li>Real-time API communicates parking availability.</li>
                                <li>Parking lots strategically located to reduce non-revenue generating miles.</li>
                                <li>Service hubs for inspection, cleaning, and zero-carbon charging.</li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetEfficiencySection;
