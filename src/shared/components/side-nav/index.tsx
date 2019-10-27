import React from "react";
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";
import {bubble as Menu} from "react-burger-menu";
const s = require("./styles.module.scss");

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const SideNav = () => {
  return (
    <Menu styles={styles} right>
      <Link to="/home">
        <h2 style={{color: "white"}}>Space Gazer</h2>
      </Link>
      <div className="mt-3">
        <Nav vertical>
          <NavItem className={s.link}>
            <Link to="/about">About</Link>
          </NavItem>

          <h3 style={{marginTop: 20}}>Categories</h3>
          <NavItem className={s.link}>
            <Link to="/solar-system">Solar System</Link>
          </NavItem>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Space Equipment
            </Link>
          </NavItem>

          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Are we alone?
            </Link>
          </NavItem>
        </Nav>
      </div>
    </Menu>
  );
};

export default SideNav;
