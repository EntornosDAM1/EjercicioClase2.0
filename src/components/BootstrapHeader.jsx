import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from  'react-bootstrap';
import {Link} from 'react-router-dom';
import {MenuItems} from '../data/MenuItems';


class BootStrapHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
 
          <img
            className="logo-image"
            src="https://eu01.edcwb.com/buscador/img/centros/logogrande/7348-a9c730d6b2b644f5b9910364ba6af277.jpg"
          />
          <i className="fas fa-user-graduate" style={{color: "white"}}/>

      <Navbar.Brand as={Link} to="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example" className="justify-content-center">
        <Nav>
          <NavDropdown id="nav-dropdown-dark-example" title="Menu" menuVariant="dark">
            {MenuItems.map((item)=>{
                  return <NavDropdown.Item as={Link} to={item.path}>{item.title}</NavDropdown.Item>
                }
              )
            }
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
  }
}

export default BootStrapHeader;