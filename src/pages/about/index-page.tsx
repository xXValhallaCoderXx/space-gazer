import React from "react";
import {Card, CardBody} from "reactstrap";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./styles.module.scss");
const HomePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.container}>
        <h1 className="text-light fs-lg-xl mb-3 mt-5">About Space Gazer</h1>
        <Card className="m-4" style={{maxWidth: 800}}>
          <CardBody className="p-4">
            <h3 className="font-weight-bold text-center mb-3">
              Greetings Traveller!
            </h3>
            <p className="text-center">
              I have always had an interest in space, and all of the amazing
              facts that go with it, though over the recent years my passion for
              it gradually grew.
            </p>
            <p className="text-center">
              I was searching around for Space infomational websites for the
              younger generation, and found most of them to be quite bland or
              difficult to navigate. This is what set the notion to create this
              concept website.
            </p>
            <p className="text-center">
              To be an infomational Space website at a younger audience, with
              hopes of increasing awareness, and spark curiosity in others, and
              inspire them to start to look up to the stars.
            </p>
          </CardBody>
        </Card>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
