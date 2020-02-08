import React from "react";
import {Container} from "reactstrap";
const styles = require("./styles.module.scss");
import {ParticleComponent} from "shared/components";

const Hero = () => {
  return (
    <>
      <ParticleComponent />
      <section id="hero-img" className={`${styles.heroWrapper} d-flex align-items-center`}>
        <Container>
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 slide-left">
            <Container fluid className="d-flex align-items-center flex-column">
              <img src={require("shared/images/nordic-compass.png")} height="100" />
              <h2 className="text-white mt-3">Be your own destiny,</h2>
              <h2 className="text-white">Make your own history</h2>
            </Container>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
