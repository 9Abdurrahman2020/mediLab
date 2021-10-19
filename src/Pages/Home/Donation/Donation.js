import React from 'react';
import { Row } from 'react-bootstrap';

const Donation = () => {
    return (
        <div className="my-5 container"> 
            <Row xs={1} md={2}>
                <div className="text-center">
                    <img className="img-fluid" src="https://i.ibb.co/bFdWhvg/54504.jpg" alt="" />
                </div>
                <div>
                    <h3 className="text-primary">Donate For Poor :</h3>
                    <Row md={2}>
                    <div>
                        <p>Name:</p>
                        <input className="w-100" type="text" />
                        <p>Email:</p>
                        <input className="w-100" type="text" />
                        <p>Donation Amount:</p>
                        <input className="w-100" type="text" />
                    </div>
                    <div>
                    <p>Donate Purpose:</p>
                        <textarea className="w-100" name="" id="" cols="30" rows="7"></textarea>
                    </div>
                    </Row>
                    <button className="btn btn-success my-3 w-100">Donate</button>
                </div>
            </Row>
        </div>
    );
};

export default Donation;