import React from "react";
const styles = require("./styles.module.scss");
import {Link} from "react-router-dom";

const PlanetHomeTab = () => {
  return (
    <div>
      <h2 className="mb-5">Moons</h2>
      <p>
        There are more than 194 moons of the various planets, dwarf planets in
        the solar system. The planets Mercury and Venus do not have any moons
        and neither does the dwarf planet Ceres. Find out the number of moons
        each planet has and their names below.
      </p>
      <p className="mt-5">
        Planets in our solar system can be divided into two main groups,
        <strong>Terrestrial Planets</strong> and <strong>Gas Giants</strong>.
        Planets that orbit other stars are referred to as{" "}
        <strong>Exoplanets</strong>.
      </p>
      <h2 className={`mt-5 ${styles.home_title_2}`}>
        Different Groups of Moons
      </h2>
      <p className="font-weight-bold">Teresstial Planet Moons</p>
      <ul>
        <li className="ml-n2">Earth, Mars</li>
      </ul>
      <p className="font-weight-bold">Gas Giant Moons</p>
      <ul>
        <li className="ml-n2">Jupiter, Saturn, Uranus, Neptune</li>
      </ul>
      <p className="font-weight-bold">Dwarf Planet Moons</p>
      <ul>
        <li className="ml-n2">Pluto, Haumea, Makemake, Eris</li>
      </ul>
    </div>
  );
};

export default PlanetHomeTab;
