import React from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "reactstrap";
const styles = require("./intro.module.scss");

const universe1 = require("shared/images/universe-1.png");

const SolarSystemIntro = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <h1 className={`${styles.title} mt-5`}>Introduction</h1>
          <p className={`${styles.main_text} mt-3`}>
            We get to see this wonder, each night, but do you ever take a
            moment, to stop, and realize to stare up, and realize all the
            amazing energy surrounding us?
          </p>
        </Col>
      </Row>
      <p>
        There are more than 194 moons of the various planets, dwarf planets in
        the solar system. The planets Mercury and Venus do not have any moons
        and neither does the dwarf planet Ceres. Find out the number of moons
        each planet has and their names below.
      </p>
      <p className="mt-5">
        Planets in our solar system can be divided into two main groups,
        <strong>Terrestrial Planets</strong> and <strong>Gas Giants</strong>.
        Planets that orbit other stars are referred to as{" "}
        <strong>Exoplanets</strong>.
      </p>
      <h2 className={`mt-5 ${styles.home_title_2}`}>
        Different Groups of Moons
      </h2>
      <p className="font-weight-bold">Teresstial Planet Moons</p>
      <ul>
        <li className="ml-n2">Earth, Mars</li>
      </ul>
      <p className="font-weight-bold">Gas Giant Moons</p>
      <ul>
        <li className="ml-n2">Jupiter, Saturn, Uranus, Neptune</li>
      </ul>
      <p className="font-weight-bold">Dwarf Planet Moons</p>
      <ul>
        <li className="ml-n2">Pluto, Haumea, Makemake, Eris</li>
      </ul>
    </Container>
  );
};

export default SolarSystemIntro;
