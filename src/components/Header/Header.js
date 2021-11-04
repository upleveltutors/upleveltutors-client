import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
    <Fragment>
        <Nav.Link href="#/">Home</Nav.Link>
    </Fragment>
)

const unauthenticatedOptions = (
    <Fragment>
        <Nav.Link href="#sign-up">Sign Up</Nav.Link>
        <Nav.Link href="#sign-in">Sign In</Nav.Link>
    </Fragment>

)

const Header = ({ user }) => (
    <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand href="#">
            Uplevel Tutors
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar=na">
            <Nav className="ml-auto">
                { alwaysOptions }
                { unauthenticatedOptions }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header