import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './doctor.css'
const Doctor = ({data}) => {
    return (
        <Col>
            <Card className="text-center p-3 card doctor-container">
                <Card.Img className="mx-auto" variant="top" src={data.img} style={{width:'150px',borderRadius:'50%'}} />
                <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    <p className="">Specialist in : <b>{data.category}</b></p>
                    <p>{data.deg}</p>
                    <p>{data.experience} Years of Experience</p>
                    <Link to={`/appointment/${data.name}`}>
                        <button className="btn btn-danger mb-2 w-100">Get Appointment</button>
                    </Link>
                    <Link to={`/details/${data.id}`}><button className="btn btn-primary w-100">Doctor Detail</button></Link>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;