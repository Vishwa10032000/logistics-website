import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import ProfileIcon from '../Assets/ProfileIcon.svg'
import { Link } from 'react-router-dom';

function customNavbar() {
    return (
        <Navbar bg="transparent" expand="lg" variant="dark">
            <div className='container d-flex justify-content-between'>
                <Navbar.Brand className='col-1 col-md-2' href="#home">
                    <Link><h2 className='text-secondary'>LOGO</h2></Link>
                </Navbar.Brand>
                <Navbar.Toggle className='col-md-1 col-2 primaryBgColor' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
                    <Nav className="col-md-5 d-flex justify-content-between">
                        <Nav.Link className='text-black' href="/">Home</Nav.Link>
                        <Nav.Link className='text-black' href="#about">About</Nav.Link>
                        <Nav.Link className='text-black' href="#services">Services</Nav.Link>
                        <Nav.Link className='text-black' href="#products">Product</Nav.Link>
                        <Nav.Link className='text-black' href="#products"> <img src={ProfileIcon} width="20px"></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default customNavbar;
