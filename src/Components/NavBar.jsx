import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Ring-Logo.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-black sticky-top">
      <Container className="flex-column text-center">

        
        <Navbar.Brand href="#home" className="mx-auto mb-3">
          <img
            src={logo}
            alt="Logo"
            height="80"
          />
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto flex-wrap justify-content-center nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#toast">Our Toast</Nav.Link>
            <Nav.Link href="#memories">Memories</Nav.Link>
            <Nav.Link href="#party">Party</Nav.Link>
            <Nav.Link href="#story">Love Story</Nav.Link>
            <Nav.Link href="#wedding">The Wedding</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#gift">Gift</Nav.Link>
            <Nav.Link href="#add">Add to Story</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
