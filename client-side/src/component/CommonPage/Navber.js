import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Commonnavbar() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className='text-white'>CRUD Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-aut main-nav ">
            <Nav.Link ><NavLink to={'/'}>list</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={'/create'}>Create</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Commonnavbar;