import React from "react";
import {RouteComponentProps} from "react-router-dom";
import {Link} from "react-scroll";
import Sticky from "react-stickynode";
import {Container, Row, Col} from "reactstrap";
import Select from "react-select";
import Flash from "react-reveal/Flash";
import Bounce from "react-reveal/Bounce";
import {LayoutMain} from "shared/components";
const styles = require("./styles.module.scss");

const options = [
  {value: "intro", label: "Introduction"},
  {value: "solar-system", label: "Solar System"},
  {value: "eclipse", label: "Solar Eclipse", disabled: "yes"},
  {value: "comets", label: "Comets", disabled: "yes"},
  {value: "asteroids", label: "Asteroids", disabled: "yes"}
];

import {Intro} from "./topics";

const MoonsHome = (props: RouteComponentProps<any>) => {
  const [isSticky, setIsSticky] = React.useState(false);
  function onChange(data: any) {
    props.history.push(`/solar-system/planets/${data.value}`);
  }

  function handleStateChange(status: any) {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  }
  function renderPage() {
    let component;
    switch (props.match.params.tab) {
      default:
        component = <Intro />;
    }
    return component;
  }
  return (
    <LayoutMain nav>
      <div className={styles.top_container_wrapper}>
        <div className={styles.title_wrapper}>
          <Bounce>
            <h1 className={`text-light ${styles.title}`}>The Moons</h1>
            <p className={styles.title_caption}>BLah</p>
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
        </Container>
      </div>
    </LayoutMain>
  );
};

export default MoonsHome;
