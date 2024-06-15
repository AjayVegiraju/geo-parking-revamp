import React from 'react';
import '../styles/FleetEfficiency.css';

const FleetEfficiencySection = () => {
    return (
        <section className="fleet-efficiency">
            <div className="container">
                <div className="content">
                    <h1>Maximize Your Robotaxi Fleet Efficiency</h1>
                    <hr className="underline" />
                    <div className="text-image-row">
                        <div className="image-container">
                            <img src="src\assets\serviceImage3.jpg" alt="Parking lot" />
                        </div>
                        <div className="text-container">
                            <h2>Optimize Operations with GeoParking's Advanced Solutions</h2>
                            <p>GeoParking Technologies provides a B2B technology platform that accelerates the mass adoption and increases the efficiency of Robotaxi fleets. Our solution offers real-time information about the location, availability, and cost of eAV parking at special Robotaxi-only parking sites across the U.S., Canada, and internationally.</p>
                            <ul>
                                <li>Real-time API communicates parking availability.</li>
                                <li>Parking lots strategically located to reduce non-revenue generating miles.</li>
                                <li>Service hubs for inspection, cleaning, and zero-carbon charging.</li>
                            </ul>
                            <a href="#learn-more" className="learn-more">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="22" viewBox="0 0 31 22" fill="none" className="learn-more-arrow">
                                    <path d="M1.93994 11.1185L28.6003 11.1185" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.0606 1.47057L30 11.1973L18.0606 20.924" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FleetEfficiencySection;
