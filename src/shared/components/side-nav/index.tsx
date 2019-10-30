import React from "react";
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
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
    <Menu burgerButtonClassName={s.burgerMenu} styles={styles} right>
      <Link to="/home">
        <h2 className="text-light">Space Gazer</h2>
      </Link>
      <div className="mt-3">
        <Nav vertical>
          <NavItem className={s.link}>
            <Link to="/about">About</Link>
          </NavItem>

          <h3 style={{marginTop: 20}}>Our Backyard</h3>
          <NavItem className={s.link}>
            <Link to="/solar-system/main">Solar System</Link>
          </NavItem>
          <NavItem className={s.link}>
            <Link to="/solar-system/planets">Planets</Link>
          </NavItem>
          <NavItem className={s.link}>
            <Link to="/solar-system/moons">Moons</Link>
          </NavItem>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Earth's Defenses
            </Link>
          </NavItem>

          <h3 style={{marginTop: 20}}>The Universe</h3>
          <NavItem className={s.link}>
            <Link to="/alone">Are we alone?</Link>
          </NavItem>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Galaxies
            </Link>
          </NavItem>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Black Holes
            </Link>
          </NavItem>
          <h3 style={{marginTop: 20}}>Technology</h3>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Space Travel
            </Link>
          </NavItem>
          <NavItem className={s.link} style={{pointerEvents: "none"}}>
            <Link style={{color: "gray"}} to="/">
              Living In Space
            </Link>
          </NavItem>
        </Nav>
      </div>
    </Menu>
  );
};

export default SideNav;
