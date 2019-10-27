import React from "react";
import {Card, CardBody} from "reactstrap";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./alone.module.scss");

const alien1 = require("shared/images/alien-friend-1.png");

const AlonePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.container}>
        <h1 className={`${styles.title} text-light`}>
          Are we alone?
        </h1>
        <img src={alien1} height="200" />
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

export default AlonePage;
