import React from "react";
import {Link} from "react-scroll";
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import {Parallax} from "react-scroll-parallax";
import Flash from "react-reveal/Flash";
import Pulse from "react-reveal/Pulse";
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
            <p className={styles.title_caption}>
              I believe alien life is quite common in the universe, although
              intelligent life is less so. Some say it has yet to appear on
              planet Earth
            </p>
            <p className="text-center text-light">~Stephen Hawking</p>
          </Bounce>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}>
            <div className={styles.scroll_downs}>
              <div className={styles.mousey}>
                <div className={styles.scroller} />
              </div>
            </div>
          </Link>
          <Flash duration={3500} forever>
            <p className={styles.explore_text}>EXPLORE</p>
          </Flash>
        </div>
      </div>
      <div className={styles.bottom_container_wrapper} id="section1">
        <Container>
          <Row>
            <Col sm="9">
              <div>
                <p className={styles.intro_text}>
                  In this day and age, our daily schedules and lifestyle, can
                  become quite hectic. It's very easy to forget, the{" "}
                  <strong>sheer beauty of the universe</strong> and take for
                  granted everything that is happening around us every second,
                </p>
                <p className={styles.intro_text}>
                  We may think as the size of the Earth as <strong>vast</strong>
                  , but when compared to the size of the universe, the earth
                  would even be the equivilant of a grain of sand, within a
                  universe that is estimated to contain over{" "}
                  <strong>200 billion </strong>
                  galaxies. The next time, we take our lives too seriously, take
                  a moment, and remember we are but a speck in the vast cosmos.
                </p>
                <p className={styles.intro_text}>
                  When you gaze up into the starry night sky, we have every
                  reason to be <strong>struck with awe</strong>, and
                  overwhelming feelings of curiosity. The universe is so vast,
                  with the number of galaxies, stars and planets in it,{" "}
                  <strong>surely </strong>
                  there must be other <strong>sentient life</strong> our there,
                  But....Why havent we heard from them?
                </p>
              </div>
            </Col>
            <Col
              sm="3"
              className="d-flex justify-content-center align-items-center">
              <Pulse forever duration={4000}>
                <img src={alien1} className={styles.alien_1} />
              </Pulse>
            </Col>
          </Row>
        </Container>
        <Row className={styles.fermi_bg_wrapper}>
          <Col sm="12">
            <Parallax className="custom-class" y={[0, -150]} tagOuter="figure">
              <h1 className={`text-center text-light ${styles.fermi_title}`}>
                THE FERMI PARADOX
              </h1>
            </Parallax>
          </Col>
        </Row>
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <p className={styles.intro_text}>
                This question we ask ourselves,{" "}
                <strong>"Where are the aliens?"</strong>, has come to be known
                as the <strong>Fermi Paradox</strong>, named after Enrico Fermi
                an Italian-American physicist.
              </p>
              <p className={styles.intro_text}>
                The paradox attempts to make sense of the contradiction between
                the <strong>potential for sentient life</strong> in the
                universe, and why we have
                <strong> yet ever encountered any</strong>.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col sm="12">
              <h1 className={`${styles.sub_header} text-center`}>
                Where is everybody?
              </h1>
            </Col>
          </Row>
          <Row>
            <Fade fraction={0.5}>
              <Row>
                <Col sm="9" className="order-2 order-sm-1 p-5">
                  <h2 className={styles.sub_title}>It takes time</h2>
                  <p className={styles.intro_text}>
                    One explanation for the Fermi Paradox is that it will just{" "}
                    <strong>take time (alot of it)</strong>, for any kind of
                    signal to travel across the vast cosmos from one point to
                    another.
                  </p>
                  <p className={styles.intro_text}>
                    It would also take time{" "}
                    <strong>(billions upon billions of years)</strong>
                    for any species to become advanced enough for inter-stellar
                    communication, travel or colonization.
                  </p>
                  <p className={styles.intro_text}>
                    Their may be signals out there, which have simply just{" "}
                    <strong>not had enough time</strong> to reach us. Given the
                    size of the universe, and the pace of evolution, we may
                    simply need to wait a length of time, which may pass many
                    generations of humans, before one reaches us.
                  </p>
                </Col>
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center order-1 order-sm-2">
                  <img src={clock} className={styles.icon_image} />
                </Col>
              </Row>
            </Fade>
            <Fade fraction={0.5}>
              <Row className="mt-5">
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center">
                  <img src={alienSpy} className={styles.icon_image} />
                </Col>
                <Col sm="9" className="p-5">
                  <h2 className={styles.sub_title}>Technical Difficulties</h2>
                  <p className={styles.intro_text}>
                    In most movies, we see <strong>"aliens"</strong> portrayed
                    as being very "human-like", with similarities to other
                    species on earth, but there is no way we can assume that
                    life in other parts of the universe will have taken the same
                    evolutional path as ourselves, So there is no way of
                    determining by what means of communcation they would even
                    use (sound, visual etc).
                  </p>
                  <p className={styles.intro_text}>
                    There are organizations that are focused on sending and
                    detecting radio signals, but other extraterrestial beings
                    could use a <strong>completely different approach</strong>,
                    which we currently have no way to detect or decipher, beyond
                    our current understanding.
                  </p>
                  <p className={styles.intro_text}>
                    Their language, mathematics and scientific understandings
                    could be beyond{" "}
                    <strong>anything we could ever comprehend</strong>.
                  </p>
                  <p className={styles.intro_text}>
                    A relative quote from <strong>Neil deGrasse Tyson</strong>{" "}
                    states{" "}
                    <i>
                      "imagine a life form whose brain power is to ours as ours
                      is to a chimpanzee’s. To such a species, our highest
                      mental achievements would be trivial."
                    </i>
                  </p>
                </Col>
              </Row>
            </Fade>
            <Fade fraction={0.5}>
              <Row className="p-5">
                <Col sm="9" className="mt-5 order-2 order-sm-1">
                  <h2 className={styles.sub_title}>
                    Zoo, Planetarium and Simulation Hypotheses
                  </h2>
                  <p className={styles.intro_text}>
                    The <strong>Zoo hypotheses</strong> suggests that any
                    extraterrestial beings, may not just be observing us
                    already, but have us locked in their own "zoo", which
                    prevents us from being visted, in order to allow humanity
                    natural and social development.
                  </p>
                  <p className={styles.intro_text}>
                    The <strong>Planetarium hypotheses</strong> claims that out
                    understanding of the universe is a mere illusion created by
                    cosmic beings able to manipulate energy and matter at a
                    cosmic scale. So what we currently percieve to be the
                    universe, could be part of a species-wide illusion.
                  </p>
                  <p className={styles.intro_text}>
                    The <strong>Simulation hypotheses</strong> makes a similar
                    proposition to the Planetarium, that we are living in a
                    computer simulation being run by a post-human civilation,
                    very much like the famous game "The Sims"
                  </p>
                </Col>
                <Col
                  sm="3"
                  className="d-flex justify-content-center align-items-center pt-5 order-1 order-sm-2">
                  <img src={earthShield} style={{maxHeight: 180}} />
                </Col>
              </Row>
            </Fade>
          </Row>
        </Container>
        <Row className={styles.fermi_bg_wrapper_2}>
          <Col sm="12">
            <Parallax y={[0, -150]} tagOuter="figure">
              <h1 className={`text-center text-light ${styles.fermi_title}`}>
                SO, ARE WE ALONE IN THE UNIVERSE?
              </h1>
            </Parallax>
          </Col>
        </Row>
        <Container className="pb-5">
          <Row>
            <Col
              sm="3"
              md="12"
              className="d-flex justify-content-center align-items-center">
              <p className={`${styles.intro_text} mt-5 text-center pl-5 pr-5`}>
                This is one of the great things about the cosmos, there are
                <strong> endless</strong> propositions and questions surrounding
                it. You are left to dream, imagine and choose which ever theory
                you sounds most plausible for you and{" "}
                <strong>find yourself in the cosmos</strong>.
              </p>
            </Col>

            <Col sm="9" md="12" className="p-5">
              <h2 className={styles.sub_title}>The First Born</h2>
              <p className={styles.intro_text}>
                A very <strong>specific sequence</strong> of events had to
                occur, not only <strong>in order</strong>, but at the{" "}
                <strong>correct time</strong> also, to create the opporunity for
                life to begin on earth, and allow for evolution to take over to
                make what we are today, this sequence of events could be{" "}
                <strong>so rare</strong> that, we could be the{" "}
                <strong>"first born"</strong> of the universe.
              </p>
              <p className={styles.intro_text}>
                This could be the very <strong>first time</strong>, life has
                ever been able to evolve to this level, uninterupted by any
                cosmic threats and astrological disasters (sorry dinosaurs)..
                This is one of the great things of the universe, there are
                endless questions and theories with regard to the comos.
              </p>
              <h2 className={`${styles.sub_title} mt-5`}>
                Find the Cosmos, Find yourself
              </h2>
              <p className={styles.intro_text}>
                Thinking of life from this perspective, can be pretty{" "}
                <strong>terrifying</strong>, the feeling of anxiety could be
                overwhelming by thoughts of intergalatic lonliness. Though this
                could also be looked at
                <strong>another way</strong>, this could contribute towards a{" "}
                <strong>positive transformation</strong> for our species on how
                we treat one another on earth.
              </p>
              <p className={styles.intro_text}>
                Our lives are truly special, and so is the world that we live
                in. Spreading <strong>awareness</strong> of these facts, can
                help to <strong>motivate</strong> us to treat our planet and all
                life on it with care, knowing that we may never find a place as
                prosperous elsewhere in the vast cosmos, that we can call home.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="bg-dark pt-3 pb-3 pt-4 text-light">
          <Row>
            <Col md="3" />
            <Col md="6">
              <p
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  paddingLeft: 20,
                  paddingRight: 20
                }}>
                Our planet is a lonely speck in the great enveloping cosmic
                dark. In our obscurity, in all this vastness, there is no hint
                that help will come from elsewhere to save us from ourselves.
              </p>
              <p
                style={{
                  fontSize: 15,
                  textAlign: "center"
                }}>
                -Cark Sagan
              </p>
            </Col>
            <Col md="3" />
          </Row>
        </div>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
