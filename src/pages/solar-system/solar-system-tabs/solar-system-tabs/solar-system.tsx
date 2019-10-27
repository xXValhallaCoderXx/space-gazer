import React from "react";
import {Row, Col} from "reactstrap";
import {ImgHoverCaption} from "shared/components";
const styles = require("./styles.module.scss");
const solarSystem = require("shared/images/solar-system-black.jpg");
const lightbulb = require("shared/images/light-bulb.png");

const MercuryTab = () => {
  return (
    <>
      <Row>
        <Col sm="12" md="8">
          <p style={{fontSize: 30, fontWeight: 800}}>Solar System</p>
          <p>
            The solar system was formed approximately 4.6 billion years ago by
            the collapse of a giant molecular cloud. The mass at its centre
            collected to form the Sun and a flat disk of dust around it.
            <br />
            <br />
            This eventually formed the planets and other bodies of the solar
            system.
          </p>
        </Col>
        <Col sm="12" md="4">
          <ImgHoverCaption
            src={solarSystem}
            height="400"
            className={`${styles.box} mt-5`}
            caption="Mercury, the smallest planet in our solar system"
          />
        </Col>
      </Row>
      <Row style={{marginTop: 50}}>
        <Col md="4">
          <img src={lightbulb} height="250" />
        </Col>
        <Col md="8">
          <h4>Interesting facts</h4>
          <ul>
            <li>Mercury does not have any moons or rings.</li>
            <li>Mercury is the smallest planet.</li>
            <li>Mercury is the closest planet to the Sun.</li>
            <li>
              Your weight on Mercury would be 38% of your weight on Earth.
            </li>
            <li>A day on the surface of Mercury lasts 176 Earth days.</li>
            <li>A year on Mercury takes 88 Earth days.</li>
            <li>It’s not known who discovered Mercury.</li>
          </ul>
        </Col>
      </Row>
      <Row style={{marginTop: 50}}>
        <Col md="12">
          <h1 className="ml-3">Discover more!</h1>
        </Col>
        <Col md="11">
          <ul>
            <div>
              <li>A year on Mercury is just 88 days long.</li>
              <p>
                One solar day (the time from noon tonoon on the planet’s
                surface) on Mercury lasts the equivalent of 176 Earth dayswhile
                the sidereal day (the time for 1 rotation in relation to a fixed
                point) lasts 59 Earth days.
                <br />
                <br />
                Mercury is nearly tidally locked to the Sun and over time this
                has slowed the rotation of the planet to almost match its orbit
                around the Sun. Mercury also has the highest orbital
                eccentricity of all the planets with its distance from the Sun
                ranging from 46 to 70 million km.
              </p>
            </div>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default MercuryTab;
