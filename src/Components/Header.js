import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { BiMenu } from 'react-icons/bi';

import logo from "./Images/tigeenlogo.png"

const Header = () => {
    return (
        <>
            <Navbar bg="info" expand="false" className="p-3">
                {/* <Container fluid className=''> */}
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>


                <Nav className="me-auto my-2 my-lg ">
                    <Container fluid className="d-flex justify-content-end border" style={{ width: "100%" }}>
                        <Navbar.Brand href="#">
                            <img src={logo} width="180" height="30" className="d-inline-block align-top" alt="tigeenlogo logo" />
                        </Navbar.Brand>

                    </Container>
                </Nav>







                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: "0px" }} ><BiMenu style={{ color: "white", fontSize: "2rem " }} /></Navbar.Toggle>

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="start" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id={`offcanvasNavbarDropdown-expand-lg`}
                            >
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                {/* </Container> */}
            </Navbar>
        </>
    );
}

export default Header;