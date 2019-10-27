import React from "react";
import Select from "react-select";
import {Parallax} from "react-scroll-parallax";
import {Col, Row, Container, Card, CardBody} from "reactstrap";
import {SolarSystem, Moons, Planets} from "./solar-system-tabs";
import {LayoutMain, Sun} from "shared/components";
const styles = require("./styles.module.scss");

const moon = require("shared/images/moon-2.png");

const options = [
  {value: "solar", label: "Solar System"},
  {value: "planets", label: "Planets"},
  {value: "moons", label: "Moons"}
];
const SolarSystemPage = (props: any) => {
  function renderCategory() {
    let component;
    switch (props.catergory) {
      case "solar":
        component = <SolarSystem />;
        break;
      case "planets":
        component = <Planets />;
        break;
      case "moons":
        component = <Moons />;
        break;
      default:
        component = <SolarSystem />;
    }
    return component;
  }
  return (
    <LayoutMain nav>
      <Container fluid className={styles.top_section}>
        <Row>
          <Col md="12">
            <h1
              className={`text-center text-light fs-lg-xxl mb-n5 ${
                styles.title
              }`}>
              The Solar System
            </h1>
          </Col>
        </Row>
        <Parallax className="custom-class" y={[600, -50]} tagOuter="figure">
          <img
            className={`${styles.breathing} ${styles.moon} d-none d-md-block`}
            src={moon}
            height="200"
          />
        </Parallax>
        <Row>
          <Col md="4" />
          <Col>
            {/* <DidYouKnowCard /> */}
            <h2 className={`text-center text-light ${styles.caption}`}>
              Some of the greatest disoveries, are just in our own backyard.
            </h2>
          </Col>
          <Col md="4" />
        </Row>
        <Row style={{paddingBottom: 100}}>
          <Col md="3" />
          <Col md="6">
            <Card>
              <CardBody className="p-4">
                <Row>
                  <Col md="2">
                    <h3>Category</h3>
                  </Col>
                  <Col md="10">
                    <Select
                      value={options.find(
                        option => option.value === props.catergory
                      )}
                      onChange={props.onTopicChange}
                      placeholder="Select a Category..."
                      options={options}
                    />
                  </Col>
                </Row>
                {renderCategory()}
              </CardBody>
            </Card>
          </Col>
          <Col md="3" />
        </Row>
      </Container>
    </LayoutMain>
  );
};

export default SolarSystemPage;

// <Parallax pages={1} ref={parallax}>
// <ParallaxLayer offset={0} speed={0} className={styles.top_section} />
// <ParallaxLayer offset={1} speed={0} className={styles.bottom_section}>
// <Container fluid>
//   <Row>
//     <Col md="12">
//       <h1
//         className="text-center text-light fs-lg-xxl"
//         style={{marginTop: 100}}>
//         The Solar System
//       </h1>
//     </Col>
//   </Row>
//   <Row>
//     <Col md="4" />
//     <Col>
//       {/* <DidYouKnowCard /> */}
//       <h2 className="text-center text-light mt-5">
//         Some of the greatest disoveries, are just in our own backyard.
//       </h2>
//     </Col>
//     <Col md="4" />
//   </Row>
//   <Row style={{marginTop: 100, paddingBottom: 100}}>
//     <Col md="3" />
//     <Col md="6">
//       <TabContainer history={props.history} />
//     </Col>
//     <Col md="3" />
//   </Row>
// </Container>
// </ParallaxLayer>

// <ParallaxLayer speed={0.2} offset={0.5}>
// <img
//   style={{marginLeft: 100}}
//   className={`${styles.breathing} d-none d-md-block`}
//   src={moon}
//   height="200"
// />
// </ParallaxLayer>
// <ParallaxLayer speed={0.5} offset={0.3}>
//   <img
//     style={{marginLeft: 400}}
//     className={`${styles.floating} ${styles.astro} d-none d-md-block`}
//     src={astro}
//     height="200"
//   />
// </ParallaxLayer>
// </Parallax>
