import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

const ContactNavbar = ({handleShowContact}) => {
    return (
        <Container>
        <Navbar expand="lg" variant="light" bg="light" className="py-4 mb-4">
        <Container>
        <Navbar.Brand href="#">СПИСОК КОНТАКТОВ</Navbar.Brand>
        <Button 
            variant="info"
            onClick={handleShowContact}
        >
            Создать
        </Button>
        </Container>
        </Navbar>
        </Container>
    );
};

export default ContactNavbar;