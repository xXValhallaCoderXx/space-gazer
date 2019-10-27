import React, {useState, useEffect} from "react";
import {Spinner} from "reactstrap";
const styles = require("./styles.module.scss");
const doorLeft = require("shared/images/door-left.jpg");
const doorRight = require("shared/images/door-right.jpg");
import {ParticleComponent} from "shared/components";
interface IProps {
  children: any;
}

const LandingPage = ({children}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  }, []);
  const openCurtain = isOpen ? "" : styles.curtainOpen;
  return (
    <div className={styles.curtain}>
      <div className={styles.curtainWrapper}>
        <div
          className={`${styles.curtainPanel} ${
            styles.curtainPanelLeft
          } ${openCurtain}`}>
          <ParticleComponent />
          <div className="d-flex justify-content-end w-100 text-white">
            <h1 style={{position: "absolute"}}>Speak Friend</h1>
            <img style={{marginTop: 57}} src={doorLeft} height="800" />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
        <div
          className={`${styles.curtainPanel} ${
            styles.curtainPanelRight
          } ${openCurtain}`}>
          <ParticleComponent />
          <div className="w-100 text-white">
            <h1 className="ml-4" style={{marginTop: 2}}>
              And Enter
            </h1>
            <img src={doorRight} height="800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
