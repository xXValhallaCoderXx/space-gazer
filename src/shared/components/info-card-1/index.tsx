import React from "react";
import {Card, CardHeader, CardBody} from "reactstrap";

interface IProps {
  title?: string;
  style?: any;
}

const InfoCard1 = (props: IProps) => {
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
