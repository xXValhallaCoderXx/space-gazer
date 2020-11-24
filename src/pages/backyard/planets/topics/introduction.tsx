import React from 'react';
// import {Link} from "react-router-dom";
import {Col, Row, Container} from 'reactstrap';
const styles = require('./intro.module.scss');
// import classNames from "classnames";

// const cx = classNames.bind(styles);
const solar1 = require('shared/images/planets/planets-2.jpg');

const PlanetsIntro = () => {
    return (
        <Container>
            <Row>
                <Col sm="12" className="p-4">
                    <h1 className={`${styles.title} mt-5`}>Introduction</h1>
                    <p className={`${styles.main_text} mt-3 p-0`}>
                        Our <i>(some not so)</i> friendly neighbours!
                    </p>
                    <p className={`${styles.main_text} mt-3 p-0`}>
                        There are <strong>8</strong> <i>(not 9?)</i> planets in our solar system, they are{' '}
                        <i>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.</i>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="5" className="d-flex justify-content-center mt-5">
                    <img src={solar1} className={styles.image_1} />
                </Col>
                <Col sm="12" md="7" className={`${styles.why_8_wrapper} p-4`}>
                    <h3 className={styles.sub_title}>Why only 8 planets?</h3>
                    <p className={`${styles.main_text} mt-3 p-0`}>
                        This can be a touchy subject and lead to heated debates, Offically, there are 8 planets. The{' '}
                        <span style={{fontWeight: 800}}>IAU</span> <i>(International Astronomical Union)</i> removed
                        Pluto from the list of what had been nine planets in the Solar System in August 2006, due to not
                        meeting the{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.iau.org/static/resolutions/Resolution_GA26-5-6.pdf">
                            requirements
                        </a>
                        .
                    </p>
                    <p className={`${styles.main_text} mt-3 p-0`}>
                        Though many will disagree with this decision,{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.sciencealert.com/nasa-administrator-jim-bridenstine-says-pluto-is-a-planet">
                            some even from within NASA.
                        </a>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className={`${styles.title} mt-5`}>Interesting Facts</h1>
                </Col>
            </Row>
            <p className={`${styles.main_text}`}>
                Planets in our solar system can be divided into two main groups,
                <strong>Terrestrial Planets</strong> and <strong>Gas Giants</strong>. Planets that orbit other stars are
                referred to as <strong>Exoplanets</strong>.
            </p>
            <h2 className={`${styles.sub_title} mt-5`}>What is a planet?</h2>
            <p className={`${styles.main_text}`}>
                Planets are among the many worlds and smaller objects that orbit the Sun. The{' '}
                <a href="http://www.iau.org/static/resolutions/Resolution_GA26-5-6.pdf">formal definition </a>
                of planet, as voted on by the IAU in 2006, is as follows:
            </p>
            <div className="rounded overflow-hidden shadow-sm mt-5 bg-dark text-light p-4">
                <h3 className={`${styles.sub_title} p-0 pl-3`}>A planet is a celestial body that</h3>
                <div className="p-3">
                    <p className={`${styles.sub_text} p-0`}>1 - Is in orbit around the Sun</p>
                    <p className={`${styles.sub_text} p-0`}>
                        2 - Has sufficient mass for its self-gravity to overcome rigid body forces so that it assumes a
                        hydrostatic equilibrium (nearly round) shape
                    </p>
                    <p className={`${styles.sub_text} p-0`}>3 - Has cleared the neighbourhood around its orbit.</p>
                </div>
            </div>
            <h2 className={`${styles.sub_title} mt-5`}>Interesting facts</h2>
            <ul>
                <li className="ml-n2">
                    <p className={`${styles.main_text}`}>
                        <strong>Mercury’s</strong> craters are named after famous artists, musicians and authors.
                    </p>
                </li>
                <li className="ml-n2 mt-3 ">
                    <p className={`${styles.main_text}`}>
                        <strong>Venus</strong> is the hottest planet in the solar system.
                    </p>
                </li>
                <li className="ml-n2 mt-3">
                    <p className={`${styles.main_text}`}>
                        <strong>Earth’s</strong> atmosphere protects us from meteoroids and radiation from the Sun.
                    </p>
                </li>
            </ul>
        </Container>
    );
};

export default PlanetsIntro;
