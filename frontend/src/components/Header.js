import React from "react"
import img from "../imagenes/LoginImg.png"
import { Navbar, Button, Nav, NavDropdown, FormControl, Form,Dropdown } from "react-bootstrap"





function Header() {

    return (
        <>
            <header>


       

                    <div id="botones">

       
                        <NavDropdown title={<img src={img} alt="Login" id="loginId"></img>} id="basic-nav-dropdown" expand="sm">
                            <NavDropdown.Item href="#">Create account</NavDropdown.Item>
                            <NavDropdown.Item href="#">Log in</NavDropdown.Item>

                        </NavDropdown>
                            
                <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic" variant="warning">
                        Menu
  </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                    </div>




            </header>


        </>
    )
}


export default Header