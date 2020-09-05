import React from "react"
import img from "../imagenes/LoginImg.png"
import { Navbar, Nav, NavDropdown, } from "react-bootstrap"
import { NavLink } from "react-router-dom";






function Header() {

    return (
        <>
            <header>




                <div id="botones">
                    <Navbar  expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link ><NavLink to="/Home">Home</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/Cities">Cities</NavLink></Nav.Link>
                        
                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>


                    <NavDropdown title={<img src={img} alt="Login" id="loginId"></img>} id="basic-nav-dropdown" expand="sm">
                        <NavDropdown.Item ><NavLink to="/Sign-In">Login</NavLink></NavDropdown.Item>
                        <NavDropdown.Item ><NavLink to="/Sign-Up">Create Account</NavLink></NavDropdown.Item>

                    </NavDropdown>


                </div>




            </header>


        </>
    )
}


export default Header