import React from "react";
import Select from "react-select";
import {Card, CardBody, Row, Container, Col} from "reactstrap";
import {withRouter} from "react-router-dom";
import {Mercury, Home} from "./planet-tabs";
const styles = require("../styles.module.scss");

const options = [
  {value: "intro", label: "Introduction"},
  {value: "mercury", label: "Mercury", disabled: "yes"},
  {value: "venus", label: "Venus", disabled: "yes"},
  {value: "saturn", label: "Saturn", disabled: "yes"}
];

const SolarSystemTab = (props: any) => {
  const [topic, setTopic] = React.useState("intro");
  React.useEffect(() => {
    setTopic(props.match.params.item);
  }, []);

  function onChange(data: any) {
    props.history.push(`/solar-system/planets/${data.value}`);
    setTopic(data.value);
  }
  const planetRenderer = () => {
    let component;
    switch (topic) {
      case "mercury":
        component = <Mercury />;
        break;
      default:
        component = <Home />;
        break;
    }
    return component;
  };
  return (
    <>
      <Container>
        <Row>
          <Col sm="12">
            <Row>
              <Col sm="12" md="2" lg="1" className="mt-3 p-0">
                <h4>Topic</h4>
              </Col>
              <Col sm="12" md="10" lg="10" className="p-0 m-0">
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
