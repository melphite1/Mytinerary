import React from "react"
import img from "../imagenes/LoginImg.png"
import { Navbar, Nav, NavDropdown, } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"
import usuarioActions from "../redux/actions/ActionUser";







function Header(props) {
    const logout = () => {
            props.desloguear()
    }

    return (
        <>
            <header>




                <div id="botones">
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link ><NavLink to="/Home">Home</NavLink></Nav.Link>
                                <Nav.Link ><NavLink to="/Cities">Cities</NavLink></Nav.Link>

                            </Nav>

                        </Navbar.Collapse>

                    </Navbar>

                    {!props.usuarios.token 
                        ? (
                            <>
                                <NavDropdown title={<img src={img} alt="Login" id="loginId"></img>} id="basic-nav-dropdown" expand="sm">
                                    <NavDropdown.Item ><NavLink to="/Sign-In">Login</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink to="/Sign-Up">Create Account</NavLink></NavDropdown.Item>

                                </NavDropdown>
                            </>
                        )
                        : ( 
                            <NavDropdown title={<img src={props.usuarios.picurl} alt="Login" id="loginId" style={{borderRadius:"15%", width:"160px"}}></img>} id="basic-nav-dropdown" expand="sm">
                                <NavDropdown.Item ><p>Bienvenido {props.usuarios.username}</p></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink to="/"><button style={{ background: "none", borderStyle: "none" }} onClick={logout}>Log out</button></NavLink></NavDropdown.Item>


                            </NavDropdown>
                        )}




                </div>




            </header>


        </>
    )
}
const mapStateToProps = state => {
    return {
        usuarios: state.userRed
    }
}

const mapDispatchToProps = {
    desloguear: usuarioActions.desloguear
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)