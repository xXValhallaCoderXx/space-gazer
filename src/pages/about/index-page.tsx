import React from "react";
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import Flash from "react-reveal/Flash";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./styles.module.scss");

const internetGlobe = require("shared/images/icons/internet-globe.png");
const missionIcon = require("shared/images/icons/mission-icon.png");
const visionIcon = require("shared/images/icons/vison-icon.png");
const magnifyIcon = require("shared/images/icons/magnify-glass.png");

const HomePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.top_container_wrapper}>
        <div className={styles.title_caption_wrapper}>
          <h1 style={{fontWeight: 800}} className={`text-light ${styles.about_title}`}>
            Not enough people in this world, I think, carry a cosmic perspective
            with them. It could be life-changing.
          </h1>
          <h4 className="text-light text-center">-Neil deGrasse Tyson</h4>
          <div className={styles.scroll_downs}>
            <div className={styles.mousey}>
              <div className={styles.scroller} />
            </div>
          </div>
          <Flash duration={3500} forever>
            <p className={styles.explore_text}>EXPLORE</p>
          </Flash>
        </div>
      </div>
      <div className={styles.bottom_container_wrapper}>
        <Container>
          <Row style={{marginTop: 150}}>
            <Col sm="12" md="6">
              <p className={styles.bottom_caption_txt}>
                <span className="font-weight-bold">
                  THE BRAIN IS LIKE A MUSCLE,
                </span>
                <br />{" "}
                <span style={{fontSize: "1.5rem"}}>
                  WHEN WE USE IT WE FEEL VERY GOOD, UNDERSTANDING IS JOYOUS
                </span>
              </p>
              <p>~Carl Sagan</p>
            </Col>
            <Col sm="12" md="6">
              <div className={styles.text_border}>
                <p style={{fontSize: 22}}>
                  I have always had a keen interest in space, though it wasnt
                  over the recent few years my passion for it increasingly grew.
                  <br />
                  <br />
                  The more I discovered about all its mysteries, and facts, the
                  further it drove my curiosity to learn more.
                </p>
              </div>
            </Col>
          </Row>
          <Row style={{marginTop: 150}}>
            <Col md="6">
              <img src={magnifyIcon} height="200" />
            </Col>
            <Col md="6">
              <p style={{fontSize: 30, fontWeight: 800, textAlign: "right"}}>
                I EXPLORED
              </p>
              <p style={{fontSize: 22, textAlign: "right"}}>
                I was searching around for Space infomational websites for the
                younger generation, and found most of them to be quite bland or
                difficult to navigate. This is what set the notion to create
                this concept website.
              </p>
            </Col>
          </Row>
          <Row style={{marginTop: 150, marginBottom: 150}}>
            <Col md="6">
              <p style={{fontSize: 30, fontWeight: 800, textAlign: "left"}}>
                THE VISION
              </p>
              <p style={{fontSize: 22, textAlign: "left"}}>
                To be an infomational Space website for a younger audience, with
                hopes of increasing awareness, and spark curiosity in others,
                inspiring them to start to look upon the stars.
              </p>
            </Col>
            <Col className="d-flex justify-content-end align-items-center" md="6">
              <img src={visionIcon} height="160" />
            </Col>
          </Row>
          <Row style={{marginTop: 150, marginBottom: 150}}>
            <Col md="6">
              <img src={missionIcon} height="200" />
            </Col>
            <Col md="6">
              <p style={{fontSize: 30, fontWeight: 800, textAlign: "right"}}>
                THE MISSION
              </p>
              <p style={{fontSize: 22, textAlign: "right"}}>
                If this site sparks the curiosity of just one person to look
                towards the stars, then this website has fufilled its duty.
              </p>
            </Col>
          </Row>
        </Container>
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{backgroundColor: "black", height: 200}}>
          <p className="text-light mb-n1" style={{fontSize: "2rem"}}>
            Excited, and curious?
          </p>
          <p className="text-light" style={{fontSize: "2rem"}}>
            You can only do one thing, uncover the mysteries of the cosmos!
          </p>
        </div>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
