import React from "react";
import {Card} from "reactstrap";

const DidYouKnowCard = () => {
  return (
    <Card className="p-3 mt-5">
      <p
        className="text-dark text-center"
        style={{fontSize: 20, fontWeight: 800}}>
        DID YOU KNOW?
      </p>
      <p className="text-center pl-5 pr-5">
        There are many different types of objects found in the solar system
      </p>
      <p className="text-center text-dark font-weight-bold">
        Explore them below!
      </p>
    </Card>
  );
};

export default DidYouKnowCard;
