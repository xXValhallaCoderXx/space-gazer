import React from "react";
import {ImgHoverCaption} from "shared/components";
import {Link} from "react-router-dom";

const solarEclipse1 = require("shared/images/solar-system-1.jpg");
const styles = require("./styles.module.scss");

const SolarSystemTab = () => {
  return (
    <div>
      <h2 className={styles.home_title}>The Solar System</h2>
      <p>
        The solar system was formed approximately{" "}
        <span>4.6 billion years ago</span> by the collapse of a giant molecular
        cloud. The mass at its centre collected to form the Sun and a flat disk
        of dust around it. This eventually formed the planets and other bodies
        of the solar system.
      </p>
      <div className={`mt-5 mb-5 ${styles.home_img_wrapper_1}`}>
        <h3 className={styles.home_txt_title}>This is our neighbourhood</h3>
        <img src={solarEclipse1} style={{width: "100%"}} />
        <h6 className={styles.home_txt_caption}>
          Get to know your neighbours!
        </h6>
      </div>
      <h2>Interesting facts</h2>
      <ul className={styles.home_facts_ul}>
        <li className="mt-3">
          The solar system consists of the Sun,{" "}
          <Link to="/solar-system/2">planets</Link>, dwarf planets,{" "}
          <Link to="/solar-system/3">moons</Link>, and numerous smaller objects
          such as comets and asteroids.
        </li>
        <li className="mt-3">
          <strong>194</strong> moons, <strong>3,583</strong> comets and{" "}
          <strong>796,289</strong> asteroids have been found in the solar
          system.
        </li>
        <li className="mt-3">
          <strong>99.86%</strong> of the solar system’s mass is found in the
          Sun. The majority of the remaining <strong>0.14%</strong> is contained
          within the eight planets.
        </li>
        <li className="mt-3">
          The <strong>combined</strong> mass of all the moons in the solar
          system is <strong>less</strong> than 0.1% of the Earth’s mass.
        </li>
        <li className="mt-3">
          The four smaller inner planets, also known as the{" "}
          <Link to="/solar-system/2">“terrestrial planets”</Link>, are primarily
          composed of rock and metal.
        </li>
        <li className="mt-3">
          The four outer planets, also known as the{" "}
          <Link to="/solar-system/2">"gas giants”</Link>, are substantially
          larger and more massive than the inner planets.
        </li>
      </ul>
    </div>
  );
};

export default SolarSystemTab;
