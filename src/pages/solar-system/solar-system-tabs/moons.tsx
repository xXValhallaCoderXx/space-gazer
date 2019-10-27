import React from "react";
import Select from "react-select";
import {Row, Container, Col} from "reactstrap";
import {withRouter} from "react-router-dom";
import {Home} from "./moon-tabs";
const styles = require("../styles.module.scss");

const options = [
  {value: "intro", label: "Introduction"},
  {value: "moon", label: "Earths' Moon", disabled: "yes"},
  {value: "jupiter-moon", label: "Jupiters Moon", disabled: "yes"},
  {value: "comets", label: "Comets", disabled: "yes"}
];

const SolarSystemTab = (props: any) => {
  const [topic, setTopic] = React.useState("intro");
  React.useEffect(() => {
    setTopic(props.match.params.item);
  }, []);

  function onChange(data: any) {
    props.history.push(`/solar-system/moon/${data.value}`);
    setTopic(data.value);
  }
  const planetRenderer = () => {
    let component;
    switch (topic) {
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
