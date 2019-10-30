import React from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "reactstrap";
const styles = require("./intro.module.scss");

const universe1 = require("shared/images/universe-1.png");

const PlanetsIntro = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <h1 className={`${styles.title} mt-5`}>Introdusction</h1>
          <p className={`${styles.main_text} mt-3`}>
            Our not so friendly neighbours!
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4" className="order-1 order-sm-2">
          <img src={universe1} className={styles.image_1} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className={`${styles.title} mt-5`}>Interesting Facts</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default PlanetsIntro;
