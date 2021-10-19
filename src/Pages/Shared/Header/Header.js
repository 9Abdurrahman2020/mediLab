import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../UseContext/useAuth';
import './Header.css'
const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">MediLab</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0 nav-link">
                    <Link to="/">Home</Link>
                    <Link to="/all-doctors">Doctors</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About Us</Link>
                    {
                        user && <a><i class="fas fa-user"></i>{user?.displayName || 'Unknown'}</a>
                    }
                    {
                        user ? <button className="btn btn-danger" onClick={logOut}>logOut</button> :
                        <Link to="/login">Login</Link>
                    }                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Header;