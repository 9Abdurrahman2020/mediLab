import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../UseContext/useAuth';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const {doctors} = useAuth()
    return (
        <div className="m-5">
            <h2 className="text-center text-danger">Our Specialist Doctors</h2>
            <hr className="w-25 text-warning mx-auto"/>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {
                doctors.slice(0,6).map(doctor=><Doctor 
                key={doctor.id}
                data={doctor}
                />)
            }
            </Row>
        </div>
    );
};

export default Doctors;