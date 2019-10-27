import React from "react";
import {Button, Card, CardBody, Row, Col} from "reactstrap";

const SolarSystemTab = () => {
  return (
    <Card>
      <CardBody>
        <img className="mx-auto" src={"https://via.placeholder.com/150"} />
        <h2 className="mt-5">Ahsshh our home!</h2>
        <Row>
          <Col sm="12" md="8">
            Our solar system consists of an average star we call the Sun, the
            planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus,
            Neptune, and Pluto. It includes: the satellites of the planets;
            numerous comets, asteroids, and meteoroids; and the interplanetary
            medium. The Sun is the richest source of electromagnetic energy
            (mostly in the form of heat and light) in the solar system.t
          </Col>
          <Col sm="12" md="4">
            <img className="mt-5" src={"https://via.placeholder.com/150"} />
          </Col>
        </Row>
        <h4 className="mt-5 ">Interesting facts</h4>
        <Row>
          <Col sm="12" md="8">
            Our solar system consists of an average star we call the Sun, the
            planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus,
            Neptune, and Pluto. It includes: the satellites of the planets;
            numerous comets, asteroids, and meteoroids; and the interplanetary
            medium. The Sun is the richest source of electromagnetic energy
            (mostly in the form of heat and light) in the solar system.t
          </Col>
          <Col sm="12" md="4">
            <img className="mx-auto" src={"https://via.placeholder.com/150"} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SolarSystemTab;
