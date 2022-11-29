import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Toggle = styled(DropdownToggle)`
  color: #fff !important;
`;

const BrandName = styled(NavbarBrand)`
  color: #fff !important;
`;

const AdditionalText = styled(NavbarText)`
  color: #fff !important;
`;

const Header = (args) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} expand='md' color='primary' fixed='top'>
      <BrandName href="/">React Challenges 01</BrandName>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
              <Toggle nav caret>
                Challenges
              </Toggle>
              <DropdownMenu end>
                <DropdownItem><Link to='/undo-redo'>Undo Redo</Link></DropdownItem>
                <DropdownItem><Link to='/card-hover'>Card Hover</Link></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Go Home</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
        <Link to='/about'><AdditionalText>About</AdditionalText></Link>
      </Collapse>
    </Navbar>
  );
};

export default Header;