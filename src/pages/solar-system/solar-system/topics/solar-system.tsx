import React from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "reactstrap";
const styles = require("./intro.module.scss");

const universe1 = require("shared/images/universe-1.png");

const SolarSytemTab = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <h1 className={`${styles.title} mt-5`}>The Solar System</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default SolarSytemTab;
