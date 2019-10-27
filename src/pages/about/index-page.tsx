import React from "react";
import {Card, CardBody} from "reactstrap";
import {LayoutMain, Hero} from "shared/components";
const styles = require("./styles.module.scss");

const HomePage = () => {
  return (
    <LayoutMain nav>
      <div className={styles.container}>
        <h1 className={`text-light ${styles.about_title}`}>
          About Space Gazer
        </h1>
        <Card className="m-4" style={{maxWidth: 800}}>
          <CardBody className="p-4">
            <p>
              I have always had a keen interest in space, though it wasnt over
              the recent few years my passion for it increasingly grew. The more
              I discovered about all its mysteries, and facts, the further it
              drove my curiosity to learn more.
            </p>
            <p>
              I was searching around for Space infomational websites for the
              younger generation, and found most of them to be quite bland or
              difficult to navigate. This is what set the notion to create this
              concept website.
            </p>
            <p>
              To be an infomational Space website for a younger audience, with
              hopes of increasing awareness, and spark curiosity in others,
              inspiring them to start to look upon the stars. If this site
              sparks the curiosity of just one person to look towards the stars,
              then this website has fufilled its duty.
            </p>
          </CardBody>
        </Card>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
