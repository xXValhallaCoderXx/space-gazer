import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const styles = require('./styles.module.scss');

import FeatureTemplate from 'shared/templates/feature-layout';
import Typography from 'shared/components/atoms/Typography';

const missionIcon = require('shared/images/icons/mission-icon.png');
const visionIcon = require('shared/images/icons/vison-icon.png');
const magnifyIcon = require('shared/images/icons/magnify-glass.png');

const HomePage = (): any => {
    return (
        <FeatureTemplate>
            <FeatureTemplate.Hero
                title="Not enough people in this world, I think, carry a cosmic perspective with them. It could be life-changing."
                author="Neil deGrasse Tyson"
                quote=""
            />
            <FeatureTemplate.Content>
                <Container>
                    <Row>
                        <Col sm="12" md="6">
                            <Typography variant="title">THE BRAIN IS LIKE A MUSCLE.</Typography>
                            <Typography variant="body1">
                                WHEN WE USE IT WE FEEL VERY GOOD, UNDERSTANDING IS JOYOUS.
                            </Typography>
                            <Typography variant="body3">~Carl Sagan</Typography>
                        </Col>
                        <Col sm="12" md="6">
                            <div className={styles.intro_text_wrapper}>
                                <Typography variant="body2">
                                    I have always had a keen interest in space, though it wasnt over the recent few
                                    years my passion for it increasingly grew.
                                    <br />
                                    <br />
                                    The more I discovered about all its mysteries, and facts, the further it drove my
                                    curiosity to learn more.
                                </Typography>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 150}}>
                        <Col md="6" className={styles.icon_wrapper_left}>
                            <img src={magnifyIcon} height="200" />
                        </Col>
                        <Col md="6">
                            <Typography variant="title">I EXPLORED</Typography>
                            <Typography variant="body2">
                                I was searching around for Space infomational websites for the younger generation, and
                                found most of them to be quite bland or difficult to navigate. This is what set the
                                notion to create this concept website.
                            </Typography>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 150, marginBottom: 150}}>
                        <Col md="6" className="order-2 order-sm-1">
                            <Typography variant="title">THE VISION</Typography>
                            <Typography variant="body2">
                                To be an infomational Space website for a younger audience, with hopes of increasing
                                awareness, and spark curiosity in others, inspiring them to start to look upon the
                                stars.
                            </Typography>
                        </Col>
                        <Col className={`${styles.icon_wrapper_right} order-1 order-sm-2`} md="6">
                            <img src={visionIcon} height="160" />
                        </Col>
                    </Row>
                    <Row style={{marginTop: 150, marginBottom: 150}}>
                        <Col md="6" className={styles.icon_wrapper_left}>
                            <img src={missionIcon} height="200" />
                        </Col>
                        <Col md="6">
                            <Typography variant="title">THE MISSION</Typography>
                            <Typography variant="body2">
                                If this site sparks the curiosity of just one person to look towards the stars, then
                                this website has fufilled its duty.
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </FeatureTemplate.Content>
            <FeatureTemplate.Footer>
                <Typography variant="title" customClass="text-center">
                    Excited, and curious?
                </Typography>
                <Typography customClass="text-center" variant="body1">
                    You can only do one thing, uncover the mysteries of the cosmos!
                </Typography>
            </FeatureTemplate.Footer>
        </FeatureTemplate>
    );
};

export default HomePage;
