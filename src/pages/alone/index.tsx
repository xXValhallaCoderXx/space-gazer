import React from "react";
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./alone.module.scss");

const alien1 = require("shared/images/aliens/alien-1.png");
const alienSpy = require("shared/images/icons/alien-spy.png");
const earthShield = require("shared/images/icons/earth-sheild.png");
const questionMark = require("shared/images/icons/question-mark.png");
const clock = require("shared/images/icons/clock.png");
const confusedAlien = require("shared/images/icons/confused-alien.png");

const HomePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.top_container_wrapper}>
        <div className={styles.title_wrapper}>
          <Bounce>
            <h1 className={`text-light ${styles.title}`}>
              Where are all the aliens?
            </h1>
          </Bounce>
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
          <Row>
            <Col sm="9">
              <div>
                <p className={styles.intro_text}>
                  As we go about our daily lives, its very easy to forget the
                  beauty of the universe that we live in, from its sheer size,
                  to the wonders of how it came to be.
                </p>
                <p className={styles.intro_text}>
                  The size of the Earth may seem vast to us, but in reality, it
                  does not even compare to a grain of sand, in a universe that
                  is estimated to contain over 200 billion galaxies. This is
                  something to think about, the next time we take our lives too
                  seriously.
                </p>
                <p className={styles.intro_text}>
                  When you gaze up into the starry night sky, we have every
                  reason to be struck with awe, and overwhelming feelings of
                  curiosity. Since the universe is so vast, and the number of
                  galaxies, starts planets in it, surely there must be other
                  sentient life our there, But....Why havent we heard from them?
                </p>
              </div>
            </Col>
            <Col
              sm="3"
              className="d-flex justify-content-center align-items-center">
              <img src={alien1} className={styles.alien_1} />
            </Col>
          </Row>
        </Container>
        <Row className="bg-dark p-5 mt-5">
          <Col sm="12">
            <h1 className={`text-center text-light ${styles.fermi_title}`}>
              THE FERMI PARADOX
            </h1>
          </Col>
        </Row>
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <p className={styles.intro_text}>
                This question we ask ourselves, "Where are the aliens?", has
                come to be known as the "Fermi Paradox", named after Enrico
                Fermi an Italian-American physicist. The paradox attempts to
                make sense of the contradiction between the potential for
                sentient life in the universe, and why we have yet ever
                encountered any.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col sm="12">
              <h1 className={`${styles.fermi_title} text-center`}>
                Where is everybody?
              </h1>
            </Col>
          </Row>
          <Row>
            <Fade fraction={0.8}>
              <Row>
                <Col sm="9" className="order-2 order-sm-1 p-5">
                  <h2 className={styles.sub_title}>
                    It takes time and space (alot of it)
                  </h2>
                  <p className={styles.intro_text}>
                    One common explanation for the Fermi paradox is that it
                    simply takes lots of time for any decipherable signals to
                    travel across the cosmos. It also takes time (billions upon
                    billions of years at best) for any species to become
                    advanced enough for interstellar communication,
                    intergalactic space travel, and possible colonization. Their
                    signals may not have reached ours, and ours may not have
                    reached them. Given the size of the universe and the pace of
                    evolution, we may simply need a special kind of patience—the
                    kind that transcends generations.
                  </p>
                </Col>
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center order-1 order-sm-2">
                  <img src={clock} className={styles.icon_image} />
                </Col>
              </Row>
            </Fade>
            <Fade fraction={0.8}>
              <Row className="mt-5">
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center pt-5">
                  <img src={questionMark} className={styles.icon_image} />
                </Col>
                <Col sm="9" className="p-5">
                  <h2 className={styles.sub_title}>
                    Technical Difficulties: We Can’t Read Their Signals
                  </h2>
                  <p className={styles.intro_text}>
                    One common explanation for the Fermi paradox is that it
                    simply takes lots of time for any decipherable signals to
                    travel across the cosmos. It also takes time (billions upon
                    billions of years at best) for any species to become
                    advanced enough for interstellar communication,
                    intergalactic space travel, and possible colonization. Their
                    signals may not have reached ours, and ours may not have
                    reached them. Given the size of the universe and the pace of
                    evolution, we may simply need a special kind of patience—the
                    kind that transcends generations.
                  </p>
                </Col>
              </Row>
            </Fade>
            <Fade fraction={0.8}>
              <Row className="p-5">
                <Col sm="9" className="mt-5 order-2 order-sm-1">
                  <h2 className={styles.sub_title}>
                    The Transcension Hypothesis: They Are Already Here
                  </h2>
                  <p style={{maxWidth: "90%"}} className={styles.intro_text}>
                    One common explanation for the Fermi paradox is that it
                    simply takes lots of time for any decipherable signals to
                    travel across the cosmos. It also takes time (billions upon
                    billions of years at best) for any species to become
                    advanced enough for interstellar communication,
                    intergalactic space travel, and possible colonization. Their
                    signals may not have reached ours, and ours may not have
                    reached them. Given the size of the universe and the pace of
                    evolution, we may simply need a special kind of patience—the
                    kind that transcends generations.
                  </p>
                </Col>
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center pt-5 order-1 order-sm-2">
                  <img src={alienSpy} style={{maxHeight: 180}} />
                </Col>
              </Row>
            </Fade>
            <Fade fraction={0.8}>
              <Row className="mt-5 mb-5">
                <Col
                  className="d-flex justify-content-center align-items-center pt-5"
                  sm="3">
                  <img src={earthShield} style={{maxHeight: 180}} />
                </Col>
                <Col sm="9" className="p-5">
                  <h2 className={styles.sub_title}>
                    The Zoo and Planetarium Hypotheses
                  </h2>
                  <p className={styles.intro_text}>
                    One common explanation for the Fermi paradox is that it
                    simply takes lots of time for any decipherable signals to
                    travel across the cosmos. It also takes time (billions upon
                    billions of years at best) for any species to become
                    advanced enough for interstellar communication,
                    intergalactic space travel, and possible colonization. Their
                    signals may not have reached ours, and ours may not have
                    reached them. Given the size of the universe and the pace of
                    evolution, we may simply need a special kind of patience—the
                    kind that transcends generations.
                  </p>
                </Col>
              </Row>
            </Fade>
          </Row>
        </Container>
        <Container className="pb-5">
          <Row className="mt-5 mb-5">
            <Col sm="12">
              <h1 className={`text-center ${styles.fermi_title}`}>
                So, are we alone in the Universe?
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              sm="3"
              md="12"
              className="d-flex justify-content-center align-items-center">
              <img src={confusedAlien} />
            </Col>

            <Col sm="9" md="12" className="p-5">
              <p className={styles.intro_text}>
                One common explanation for the Fermi paradox is that it simply
                takes lots of time for any decipherable signals to travel across
                the cosmos. It also takes time (billions upon billions of years
                at best) for any species to become advanced enough for
                interstellar communication, intergalactic space travel, and
                possible colonization. Their signals may not have reached ours,
                and ours may not have reached them. Given the size of the
                universe and the pace of evolution, we may simply need a special
                kind of patience—the kind that transcends generations. may not
                have reached them. Given the size of the universe and the pace
                of evolution, we may simply need a special kind of patience—the
                kind that transcends generations.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="bg-dark p-5">
          <h2 className={`${styles.footer_text} text-light`}>
            Excited, and curious?
          </h2>
          <h2 className={`${styles.footer_text} text-light mb-n1`}>
            You can only do one thing, uncover the mysteries of the cosmos!
          </h2>
        </div>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
