import React from "react";
import {Card, CardBody, Row, Container, Col, Input} from "reactstrap";
import {withRouter} from "react-router-dom";
import Select from "react-select";
import {SolarSystem, SolarEclipse, Home} from "./solar-system-tabs";

const options = [
  {value: "intro", label: "Introduction"},
  {value: "solar", label: "Solar System", disabled: "yes"},
  {value: "eclipse", label: "Solar Eclipse", disabled: "yes"},
  {value: "comets", label: "Comets", disabled: "yes"},
  {value: "asteroids", label: "Asteroids", disabled: "yes"}
];

const SolarSystemTab = (props: any) => {
  const [topic, setTopic] = React.useState("intro");
  React.useEffect(() => {
    setTopic(props.match.params.item);
  }, []);

  function onChange(data: any) {
    props.history.push(`/solar-system/solar/${data.value}`);
    setTopic(data.value);
  }

  function planetRenderer() {
    let component;
    switch (topic) {
      case "solar":
        component = <SolarSystem />;
        break;
      case "eclipse":
        component = <SolarEclipse />;
        break;
      default:
        component = <Home />;
        break;
    }
    return component;
  }
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" className="mt-4  ">
            <Row>
              <Col sm="12" md="2" className="p-0">
                <h3 className="mt-1">Topic</h3>
              </Col>
              <Col sm="12" md="10" className="p-0 pl-1 m-0">
                <Select
                  onChange={onChange}
                  value={options.find(option => option.value === topic)}
                  isOptionDisabled={option => option.disabled === "yes"}
                  placeholder="Select a Topic..."
                  options={options}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div style={{marginTop: 50}}>{planetRenderer()}</div>
    </>
  );
};

export default withRouter(SolarSystemTab);
