import React from "react";
const styles = require("./styles.module.scss");
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const LayoutMainContainer = () => {
  const [isOpen, setOpen] = React.useState(false);

  function toggle() {
    setOpen(!isOpen);
  }
  return (
    <Navbar expand="md" className="sticky-top bg-transparent">
      <NavbarToggler onClick={toggle}>
        <span style={{color: "white"}}>Togle</span>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav vertical className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Solar System</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Galaxies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Gravity</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default LayoutMainContainer;
