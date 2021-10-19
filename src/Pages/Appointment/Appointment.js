import React, {} from 'react';
import { useParams } from 'react-router';
import useAuth from '../../UseContext/useAuth';
import './appointment.css'
const Appointment = () => {
    const {user} = useAuth()
    const {name} = useParams();
    return (
        <div className=" mx-auto bg-primary text-white">
            <div className="text-center pt-4">
            <h3>Book an Appointment</h3>
            <p>of</p>
                <strong>{name}</strong>
            </div>
            <div className="booking-container px-5">
            <div>
                    <p>Name:</p>
                    <input type="text" value={user?.displayName} />
                </div>
                <div>
                    <p>Email:</p>
                    <input type="Email" value={user?.email} />
                </div>
                <div>
                    <p>Phone:</p>
                    <input type="text" value={user?.phone} />
                </div>
                <div>
                    <p>Date of Visit:</p>
                    <input type="date" />
                </div>
                <button className="book-btn">Book Now</button>
            </div>
        </div>
    );
};

export default Appointment;