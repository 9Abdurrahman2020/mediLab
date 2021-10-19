import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="info container">
                <div>
                    <h1 className="text-warning display-4">MediLab's Doctors <br />Are Always Waiting For You</h1>
                    <h4 className="text-white mb-3">Get Your Appointment Now !</h4>
                    <Link to="/all-doctors"><button className="btn btn-danger">Our Doctors</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;