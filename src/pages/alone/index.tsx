import React from "react";
import {Card, CardBody} from "reactstrap";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./alone.module.scss");

const alien1 = require("shared/images/alien-friend-1.png");

const AlonePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.container}>
        <h1 className={`${styles.title} text-light`}>Are we alone?</h1>
        {/* <img src={alien1} height="200" /> */}
        <Card className="m-4" style={{maxWidth: 800}}>
          <CardBody className="p-4">iN PROGRESS</CardBody>
        </Card>
      </div>
    </LayoutMain>
  );
};

export default AlonePage;
