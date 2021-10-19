import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const OurTests = () => {
    return (
        <Container>
            <h2 className="my-4">We are Currently doing these test </h2>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://praavahealth.com/wp-content/uploads/blog-image-template-_-Facebook-post-3-4.png" />
        <Card.Body>
          <Card.Title>Covid-19 test</Card.Title>
          <Card.Text>
            <ul>
                <li>Get result in the same day</li>
                <li>Fee only 2500tk</li>
            </ul>
          </Card.Text>
          <Button variant="primary">Test Today</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://praavahealth.com/wp-content/uploads/blog-image-template-_-Facebook-post-4-2.png" />
        <Card.Body>
          <Card.Title>Dengue test</Card.Title>
          <Card.Text>
            <ul>
                <li>Get result in the same day</li>
                <li>Fee only 500tk</li>
            </ul>
          </Card.Text>
          <Button variant="primary">Test Today</Button>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </Container>
    );
};

export default OurTests;