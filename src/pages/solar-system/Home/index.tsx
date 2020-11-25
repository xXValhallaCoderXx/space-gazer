import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {RouteComponentProps, Link} from 'react-router-dom';

import Typography from 'shared/components/atoms/Typography';
import FeatureTemplate from 'shared/templates/feature-layout';

import {QUOTES, SOLAR_SYSTEM_OPTIONS} from 'shared/constants/quotes';

const styles = require('./intro.module.scss');
const universe1 = require('shared/images/universe-1.png');

const HomePage = (props: RouteComponentProps<any>): any => {
    function onChange(data: any) {
        props.history.push(`/solar-system/${data.value}`);
    }

    return (
        <FeatureTemplate>
            <FeatureTemplate.Hero
                title="The Solar System"
                quote={QUOTES.pauloCoelho.quote}
                author={QUOTES.pauloCoelho.author}
            />
            <FeatureTemplate.StickyBarSections
                text="Select Topic"
                tab={props.match.params.tab}
                options={SOLAR_SYSTEM_OPTIONS}
                onChange={onChange}
            />
            <FeatureTemplate.Content>
                <Container>
                    <Row>
                        <Col sm="12">
                            <Typography variant="title">Introduction</Typography>
                            <Typography variant="body1">Ahh, the solar system, our backyard!</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="8" className="order-2 order-sm-1">
                            <Typography variant="body2">
                                The solar system was formed approximately <strong>4.6 billion years ago</strong> by the
                                collapse of a giant molecular cloud. The mass at its centre collected to{' '}
                                <strong>form the Sun</strong> and a flat disk of dust around it. This eventually with
                                numerous events, formed the planets and other bodies of the solar system.
                            </Typography>
                        </Col>
                        <Col sm="12" md="4" className="order-1 order-sm-2">
                            <img src={universe1} className={styles.image_1} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Typography variant="title">Interesting Facts</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        The solar system consists of the Sun, <Link to="/solar-system/2">planets</Link>,
                                        dwarf planets, <Link to="/solar-system/3">moons</Link>, and numerous smaller
                                        objects such as comets and asteroids.
                                    </Typography>
                                </li>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        <strong>194</strong> moons, <strong>3,583</strong> comets and{' '}
                                        <strong>796,289</strong> asteroids have been found in the solar system.
                                    </Typography>
                                </li>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        <strong>99.86%</strong> of the solar system’s mass is found in the Sun. The
                                        majority of the remaining <strong>0.14%</strong> is contained within the eight
                                        planets.
                                    </Typography>
                                </li>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        The <strong>combined</strong> mass of all the moons in the solar system is{' '}
                                        <strong>less</strong> than 0.1% of the Earth’s mass.
                                    </Typography>
                                </li>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        The four smaller inner planets, also known as the{' '}
                                        <Link to="/solar-system/2">“terrestrial planets”</Link>, are primarily composed
                                        of rock and metal.
                                    </Typography>
                                </li>
                                <li className="mt-3">
                                    <Typography variant="body3">
                                        The four outer planets, also known as the{' '}
                                        <Link to="/solar-system/2">"gas giants”</Link>, are substantially larger and
                                        more massive than the inner planets.
                                    </Typography>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </FeatureTemplate.Content>
        </FeatureTemplate>
    );
};

export default HomePage;
