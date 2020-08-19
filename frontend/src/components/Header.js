import React from "react"
import img from "../imagenes/LoginImg.png"
import { Navbar, Button, Nav, NavDropdown, FormControl, Form,Dropdown } from "react-bootstrap"
import { NavLink} from "react-router-dom";





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
                        <Dropdown.Item ><NavLink to="/Home">Home</NavLink></Dropdown.Item>
                        <Dropdown.Item ><NavLink  to="/Cities">Cities</NavLink></Dropdown.Item>
                   
                    </Dropdown.Menu>
                </Dropdown>

                    </div>




            </header>


        </>
    )
}


export default Header