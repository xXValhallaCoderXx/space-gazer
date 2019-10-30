import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {Link} from "react-scroll";
import Sticky from "react-stickynode";
import {Card, CardBody, Container, Row, Col} from "reactstrap";
import {Parallax} from "react-scroll-parallax";
import Select from "react-select";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./styles.module.scss");

const alien1 = require("shared/images/aliens/alien-1.png");
const alienSpy = require("shared/images/icons/alien-spy.png");
const earthShield = require("shared/images/icons/earth-sheild.png");
const questionMark = require("shared/images/icons/question-mark.png");
const clock = require("shared/images/icons/clock.png");
const confusedAlien = require("shared/images/icons/confused-alien.png");

const options = [
  {value: "intro", label: "Introduction"},
  {value: "solar-system", label: "Solar System"},
  {value: "eclipse", label: "Solar Eclipse", disabled: "yes"},
  {value: "comets", label: "Comets", disabled: "yes"},
  {value: "asteroids", label: "Asteroids", disabled: "yes"}
];

import {Intro, SolarSystem} from "./topics";

const HomePage = (props: RouteComponentProps<any>) => {
  const [isSticky, setIsSticky] = React.useState(false);
  function onChange(data: any) {
    props.history.push(`/solar-system/main/${data.value}`);
    // setTopic(data.value);
  }

  function handleStateChange(status: any) {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
    if (status.status === Sticky.STATUS_RELEASED) {
      console.log("the component is relea");
    }
  }
  function renderPage() {
    console.log("PROPS: ", props);
    let component;
    switch (props.match.params.tab) {
      case "solar-system":
        component = <SolarSystem />;
        break;
      default:
        component = <Intro />;
    }
    return component;
  }
  console.log("IS STIK: ", isSticky);
  return (
    <LayoutMain nav>
      <div className={styles.top_container_wrapper}>
        <div className={styles.title_wrapper}>
          <Bounce>
            <h1 className={`text-light ${styles.title}`}>The Solar System</h1>
            <p className={styles.title_caption}>
              We all live in our own world. But if you look up at the starry sky
              - you'll see that all the different worlds up there combine to
              form constellations, solar systems and galaxies.
            </p>
            <p className="text-center text-light">~Paulo Coelho</p>
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
        <Sticky
          onStateChange={handleStateChange}
          innerZ={1000}
          enabled={true}
          top={0}
          bottomBoundary={"#section1"}>
          <Row
            className={`${isSticky ? styles.active_sticky : ""} ${
              styles.select_topic_wrapper
            }`}>
            <Col sm="12" md="2" className="d-flex justify-content-center">
              <h2 className={`${styles.category_title} mt-1`}>Select Topic</h2>
            </Col>
            <Col sm="10" md="10" style={{paddingRight: 100}}>
              <Select
                onChange={onChange}
                value={options.find(
                  option => option.value === props.match.params.tab
                )}
                isOptionDisabled={option => option.disabled === "yes"}
                placeholder="Select a Topic..."
                options={options}
              />
            </Col>
          </Row>
        </Sticky>
        <Container>
          <Row>{renderPage()}</Row>
          <Row>{renderPage()}</Row>
        </Container>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
