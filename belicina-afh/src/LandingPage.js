import React from 'react';
import { Container, Row, Col, Button, Card, Form, InputGroup } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <Container fluid>
            {/* Navigation */}

            {/* Hero Section */}
            <Row className="py-5" style={{ backgroundImage: 'url(/example.png)' }}>
                <Col>
                    <h1>Creative Design</h1>
                    <p>Loriam ipsum dolor information</p>
                    <Button>Learn More</Button>
                </Col>
            </Row>

            {/* Information Cards */}
            <Row className="py-5">
                {/* Example Card */}
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="/example.png" />
                        <Card.Body>
                            <Card.Title>Loriam ipsum dolor information header</Card.Title>
                            <Card.Text>
                                Information content goes here...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Repeat similar Col components for other cards... */}
            </Row>

            {/* Testimonials */}
            {/* Add your testimonials section here... */}

            {/* Subscription Section */}
            <Row className="py-5">
                <Col>
                    <h3>Follow our news channels for the latest news</h3>
                    <Form>
                        <InputGroup>
                            <Form.Control type="email" placeholder="Enter your email" />
                            <Button variant="primary">Subscribe</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>

            {/* Footer */}
            <Row className="py-3">
                {/* Add your footer content here */}
                <Col><p>Thank you for watching</p></Col>
            </Row>
        </Container>
    );
}

export default LandingPage;
