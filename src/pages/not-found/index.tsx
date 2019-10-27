import React from "react";
import {Link} from "react-router-dom";
const styles = require("./styles.module.scss");
const astro = require("shared/images/astro-2.png");
const planetBig = require("shared/images/space-planet-1.png");

const NotFound = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className={styles.notfound_wrapper}>
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className={`fs-md-xxl fs-sm-xxl text-light ${styles.title_text}`}>
          404
        </h1>
        <p className="text-light text-center pl-4 pr-4">
          You have boldy gone, where no other has gone before!
        </p>
        <p className="text-light mt-2">Click below, to teleport back</p>
        <Link className="btn btn-secondary" to="/home">
          Home
        </Link>
      </div>
      <img src={astro} className={styles.astro} />

      <img src={planetBig} className={styles.space_planet} />
    </div>
  );
};

export default NotFound;
