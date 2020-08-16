import React from "react"
import img from "../imagenes/LoginImg.png"
import { Navbar, Button, Nav, NavDropdown, FormControl, Form } from "react-bootstrap"





function Header() {

    return (
        <>
            <header>


                <Navbar  expand="lg">
                    <div id="navbarOrden">
                        <div id = "botones">
                          
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title={<img src={img} alt="Login" id="loginId"></img>} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Create account</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Log in</NavDropdown.Item>

                                    </NavDropdown>
                          
                                    <Nav.Link href="#1">Home</Nav.Link>
                                    <Nav.Link href="#2">About</Nav.Link>
                                    <Nav.Link href="#3">Contact</Nav.Link>
                             

                                </Nav>
                            </Navbar.Collapse>
                            
                        </div>
            
                    </div>
                </Navbar>

            </header>


        </>
    )
}


export default Header