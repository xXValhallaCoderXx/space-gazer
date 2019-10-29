import React from "react";
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import Flash from "react-reveal/Flash";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./alone.module.scss");

const alien1 = require("shared/images/aliens/alien-1.png");

const HomePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.top_container_wrapper}>
        <div className={styles.title_wrapper}>
          <h1 className={`text-light ${styles.title}`}>
            Where are all the aliens?
          </h1>
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
                  As we go on with our everyday lives, it’s very easy to forget
                  about the sheer size of the universe.
                </p>
                <p className={styles.intro_text}>
                  The Earth may seem like a mighty place, but it’s practically a
                  grain within a grain of sand in a universe that is estimated
                  to contain over 200 billion galaxies. That’s something to
                  think about the next time you take life too seriously.
                </p>
                <p className={styles.intro_text}>
                  So when we gaze up into the starry night sky, we have every
                  reason to be awestruck—and overwhelmed with curiosity. With
                  the sheer size of the universe and the number of galaxies,
                  stars, and planets in it, surely there are other sentient
                  beings out there. But how come we haven’t heard from them?
                </p>
              </div>
            </Col>
            <Col sm="3">
              <img className="ml-5" src={alien1} />
            </Col>
          </Row>
        </Container>
        <Row className="bg-dark p-5 mt-5">
          <Col sm="12">
            <h1 style={{fontSize: 100}} className="text-center text-light">
              THE FERMI PARADOX
            </h1>
          </Col>
        </Row>
        <Container>
          <Row className="mt-5">
            <Col>
              <p className={styles.intro_text}>
                This question has come to be known as the Fermi paradox. Named
                after Italian-American physicist Enrico Fermi, the paradox
                describes the seeming contradiction between the potential for
                intelligent life in the cosmos and the fact that we have yet to
                detect any.
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
