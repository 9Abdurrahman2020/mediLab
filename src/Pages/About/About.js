import React from 'react';
import { Row } from 'react-bootstrap';

const About = () => {
    return (
        <Row xs={1} md={2} className="">
            <div className="p-4">
                <p> </p>
                <h1 className="text-center">About us</h1>
                <p>We are a Diagonestic Lab Called MediLab, Providing you Health related services .Our vision is to help to get best services in less expanse. In our diagonestic center we provide all most all categories of Doctors. Here you can immediately test your blood, covid-19 and so on. We are also trying to help poor peoples through a campaign. We are also planning to introduce more needy Health facilities for you, Thanks for connected with us.
                </p>
            </div>
            <div>
                <img className="img-fluid" src="https://i.ibb.co/F4G3CQB/3647440.jpg" alt="" />
            </div>
        </Row>
    );
};

export default About;