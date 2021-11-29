import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavigationBar = ()=> {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home"><b className="text-primary">Circle</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="/"><span className="icon-space"><FontAwesomeIcon icon="home" /></span>Home</Nav.Link>
                <Nav.Link href="#link"><span className="icon-space"><FontAwesomeIcon icon="comment-alt" /></span>Messenger</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="/auth">
                    <span className="text-danger">Logout</span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar;