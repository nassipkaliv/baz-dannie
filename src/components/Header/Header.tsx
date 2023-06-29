import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">База-Данных</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <NavDropdown title="Базы Данных" id="basic-nav-dropdown">
              <NavDropdown.Item href="#logistika">
                Базы клиентов для логистических компаний
              </NavDropdown.Item>
              <NavDropdown.Item href="#Avto">
                Базы клиентов для поставщиков автотоваров
              </NavDropdown.Item>
              <NavDropdown.Item href="#medicine">
                Базы клиентов для поставщиков в сфере медицины
              </NavDropdown.Item>
              <NavDropdown.Item href="#factory">
                Базы клиентов для поставщиков заводов и фабрик
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;