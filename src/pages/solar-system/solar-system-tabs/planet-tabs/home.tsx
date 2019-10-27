import React from "react";

const PlanetHomeTab = () => {
  return (
    <div>
      <h2 className="mb-5">The Planets</h2>
      <p>
        There are 8 planets in our solar system, they are Mercury Venus, Earth,
        Mars, Jupiter, Saturn, Uranus and Neptune.
      </p>
      <p>
        Planets in our solar system can be divided into two main groups,
        <strong>Terrestrial Planets</strong> and <strong>Gas Giants</strong>.
        Planets that orbit other stars are referred to as{" "}
        <strong>Exoplanets</strong>.
      </p>
      <h2 className="mt-5">What is a planet?</h2>
      <p>
        Planets are among the many worlds and smaller objects that orbit the
        Sun. The formal definition of planet, as voted on by the International
        Astronomical Union in 2006, is as follows:
      </p>
      <h2 className="mt-5">Interesting facts</h2>
      <ul>
        <li className="ml-n2">
          <strong>Mercury’s</strong> craters are named after famous artists,
          musicians and authors.
        </li>
        <li className="ml-n2 mt-3 ">
          <strong>Venus</strong> is the hottest planet in the solar system.
        </li>
        <li className="ml-n2 mt-3">
          <strong>Earth’s</strong> atmosphere protects us from meteoroids and
          radiation from the Sun.
        </li>
      </ul>
    </div>
  );
};

export default PlanetHomeTab;
