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
          <p className={`${styles.main_text} mt-3`}>mOONSNSSNN</p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="8" className="order-2 order-sm-1">
          <p className={styles.main_text}>
            The solar system was formed approximately{" "}
            <strong>4.6 billion years ago</strong> by the collapse of a giant
            molecular cloud. The mass at its centre collected to{" "}
            <strong>form the Sun</strong> and a flat disk of dust around it.
            This eventually with numerous events, formed the planets and other
            bodies of the solar system.
          </p>
        </Col>
        <Col sm="12" md="4" className="order-1 order-sm-2">
          <img src={universe1} className={styles.image_1} />
        </Col>
      </Row>
    </Container>
  );
};

export default SolarSystemIntro;
