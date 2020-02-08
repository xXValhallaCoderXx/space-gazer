import React from "react";
import {Card, CardBody} from "reactstrap";

interface Props {
  title?: string;
  style?: any;
}

const InfoCard1 = (props: Props) => {
  return (
    <Card style={props.style}>
      {/* <CardHeader>
        <h1 className="text-dark" style={{marginBottom: -20}}>The Solar System</h1>>
      </CardHeader> */}
      <CardBody>
        <p className="text-dark">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      </CardBody>
    </Card>
  );
};

export default InfoCard1;
