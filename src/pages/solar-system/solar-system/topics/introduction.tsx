import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from 'reactstrap';
const styles = require('./intro.module.scss');

const universe1 = require('shared/images/universe-1.png');

const SolarSystemIntro = (): any => {
    return (
        <Container>
            <Row>
                <Col sm="12">
                    <h1 className={`${styles.title} mt-5`}>Introduction</h1>
                    <p className={`${styles.main_text} mt-3`}>Ahh, the solar system, our backyard!</p>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="8" className="order-2 order-sm-1">
                    <p className={styles.main_text}>
                        The solar system was formed approximately <strong>4.6 billion years ago</strong> by the collapse
                        of a giant molecular cloud. The mass at its centre collected to <strong>form the Sun</strong>{' '}
                        and a flat disk of dust around it. This eventually with numerous events, formed the planets and
                        other bodies of the solar system.
                    </p>
                </Col>
                <Col sm="12" md="4" className="order-1 order-sm-2">
                    <img src={universe1} className={styles.image_1} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className={`${styles.title} mt-5`}>Interesting Facts</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className={styles.home_facts_ul}>
                        <li className="mt-3">
                            The solar system consists of the Sun, <Link to="/solar-system/2">planets</Link>, dwarf
                            planets, <Link to="/solar-system/3">moons</Link>, and numerous smaller objects such as
                            comets and asteroids.
                        </li>
                        <li className="mt-3">
                            <strong>194</strong> moons, <strong>3,583</strong> comets and <strong>796,289</strong>{' '}
                            asteroids have been found in the solar system.
                        </li>
                        <li className="mt-3">
                            <strong>99.86%</strong> of the solar system’s mass is found in the Sun. The majority of the
                            remaining <strong>0.14%</strong> is contained within the eight planets.
                        </li>
                        <li className="mt-3">
                            The <strong>combined</strong> mass of all the moons in the solar system is{' '}
                            <strong>less</strong> than 0.1% of the Earth’s mass.
                        </li>
                        <li className="mt-3">
                            The four smaller inner planets, also known as the{' '}
                            <Link to="/solar-system/2">“terrestrial planets”</Link>, are primarily composed of rock and
                            metal.
                        </li>
                        <li className="mt-3">
                            The four outer planets, also known as the <Link to="/solar-system/2">"gas giants”</Link>,
                            are substantially larger and more massive than the inner planets.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default SolarSystemIntro;
