import React from 'react';
import FeatureTemplate from 'shared/templates/feature-layout';
import {Container, Row, Col} from 'reactstrap';
import {Parallax} from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import Typography from 'shared/components/atoms/Typography';
const styles = require('./alone.module.scss');

const alien1 = require('shared/images/aliens/alien-1.png');
const alienSpy = require('shared/images/icons/alien-spy.png');
const earthShield = require('shared/images/icons/earth-sheild.png');
const clock = require('shared/images/icons/clock.png');

const HomePage = () => {
    return (
        <FeatureTemplate>
            <FeatureTemplate.Hero
                title="Where are all the aliens?"
                quote="I believe alien life is quite common in the universe, although intelligent life is less so. Some say it has yet to appear on planet Earth"
                author="~Stephen Hawking"
            />
            <FeatureTemplate.Content>
                <Container>
                    <Row>
                        <Col sm="9">
                            <Typography variant="body2">
                                Day by day in the morder hectic daily lifestyle, its very easy to forget the
                                <strong> beauty of the universe</strong> that we live in this very moment, from trying
                                to comprehend its sheer size, to the wonders of how it came to be.
                            </Typography>
                            <Typography variant="body2">
                                The size of the Earth may seem vast to us, but in reality, it does not even compare to a
                                grain of sand, in a universe that is estimated to contain over 200 billion galaxies.
                                This is something to think about, the next time we take our lives too seriously.
                            </Typography>
                            <Typography variant="body2">
                                When you gaze up into the starry night sky, we have every reason to be{' '}
                                <strong>struck with awe</strong>, and overwhelming feelings of curiosity. Since the
                                universe is so vast, and the number of galaxies, starts planets in it, surely there must
                                be other sentient life our there, But....Why havent we heard from them?
                            </Typography>
                        </Col>
                        <Col sm="3" className="d-flex justify-content-center align-items-center">
                            <img src={alien1} className={styles.alien_1} />
                        </Col>
                    </Row>
                </Container>
                <Row className={styles.fermi_bg_wrapper}>
                    <Col sm="12">
                        <Parallax className="custom-class" y={[0, -150]} tagOuter="figure">
                            <h1 className={`text-center text-light ${styles.fermi_title}`}>THE FERMI PARADOX</h1>
                        </Parallax>
                    </Col>
                </Row>
                <Container>
                    <Row className="mt-5 mb-5">
                        <Col>
                            <Typography variant="body2">
                                This question we ask ourselves, <strong>"Where are the aliens?"</strong>, has come to be
                                known as the <strong>Fermi Paradox</strong>, named after Enrico Fermi an
                                Italian-American physicist.
                            </Typography>
                            <Typography variant="body2">
                                The paradox attempts to make sense of the contradiction between the potential for
                                sentient life in the universe, and why we have yet ever encountered any.
                            </Typography>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col sm="12">
                            <Typography variant="title" customClass="text-center">
                                Where is everybody?
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Fade fraction={0.5}>
                            <Row>
                                <Col sm="9" className="order-2 order-sm-1 p-5">
                                    <Typography variant="title">It takes time</Typography>
                                    <Typography variant="body2">
                                        One explanation for the Fermi Paradox is that it will just{' '}
                                        <strong>takes a lot of time</strong>, for any kind of signal to travel across
                                        the vast cosmos from one point to another.
                                    </Typography>

                                    <Typography variant="body2">
                                        It would also take time <strong>(billions upon billions of years)</strong>
                                        for any species to become advanced enough for inter-stellar communication,
                                        travel or colonization.
                                    </Typography>
                                    <Typography variant="body2">
                                        Their may be signals outthere, just simply not have had enough time to reach us,
                                        given the size of the universe, and the pace of evolution, we may simply need to
                                        wait a length of time, which may pass over many generations of humans.
                                    </Typography>
                                </Col>
                                <Col
                                    sm="3"
                                    className="d-flex justify-content-center align-items-center order-1 order-sm-2">
                                    <img src={clock} className={styles.icon_image} />
                                </Col>
                            </Row>
                        </Fade>
                        <Fade fraction={0.5}>
                            <Row className="mt-5">
                                <Col sm="3" className="d-flex justify-content-center align-items-center">
                                    <img src={alienSpy} className={styles.icon_image} />
                                </Col>
                                <Col sm="9" className="p-5">
                                    <Typography variant="title">Technical Difficulties</Typography>
                                    <Typography variant="body2">
                                        In most movies, we see <strong>"aliens"</strong> portrayed as being very
                                        "human-like", with similarities to other species on earth, but there is no way
                                        we can assume that life in other parts of the universe will have taken the same
                                        evolutional path as ourselves, So there is no way of determining by what means
                                        of communcation they would even use.
                                    </Typography>
                                    <Typography variant="body2">
                                        There have been many organizations that are focused on sending and detecting
                                        radio signals, but other extraterrestial beings could use a completely different
                                        approach, which we currently have no way to detect or decipher, beyond our
                                        current understanding.
                                    </Typography>
                                    <Typography variant="body2">
                                        Their language, mathematics and scientific understandings could be beyond
                                        anything we could ever comprehend.
                                    </Typography>
                                    <Typography variant="body2">
                                        A specific quote from Neil deGrasse Tyson states "imagine a life form whose
                                        brain power is to ours as ours is to a chimpanzee’s. To such a species, our
                                        highest mental achievements would be trivial."
                                    </Typography>
                                </Col>
                            </Row>
                        </Fade>
                        <Fade fraction={0.5}>
                            <Row className="p-5">
                                <Col sm="9" className="mt-5 order-2 order-sm-1">
                                    <Typography variant="title">Zoo, Planetarium and Simulation Hypotheses</Typography>
                                    <Typography variant="body2">
                                        The Zoo hypotheses suggests that any extraterrestial beings, may not just be
                                        observing us already, but have us locked in their own "zoo", which prevents us
                                        from being visted, in order to allow humanity natural and social development.
                                    </Typography>
                                    <Typography variant="body2">
                                        The Planetarium hypotheses claims that out understanding of the universe is a
                                        mere illusion created by cosmic beings able to manipulate energy and matter at a
                                        cosmic scale. So what we currently percieve to be the universe, could be part of
                                        a species-wide illusion.
                                    </Typography>
                                    <Typography variant="body2">
                                        The Simulation hypotheses makes a similar proposition to the Planetarium, that
                                        we are living in a computer simulation being run by a post-human civilation,
                                        very much like the famous game "The Sims"
                                    </Typography>
                                </Col>
                                <Col
                                    sm="3"
                                    className="d-flex justify-content-center align-items-center pt-5 order-1 order-sm-2">
                                    <img src={earthShield} style={{maxHeight: 180}} />
                                </Col>
                            </Row>
                        </Fade>
                    </Row>
                </Container>
                <Row className={styles.fermi_bg_wrapper_2}>
                    <Col sm="12">
                        <Parallax y={[0, -150]} tagOuter="figure">
                            <h1 className={`text-center text-light ${styles.fermi_title}`}>
                                SO, ARE WE ALONE IN THE UNIVERSE?
                            </h1>
                        </Parallax>
                    </Col>
                </Row>

                <Container className="pb-5">
                    <Row>
                        <Col sm="3" md="12" className="d-flex justify-content-center align-items-center">
                            <Typography variant="body2" customClass="text-center">
                                This is one of the great things about the cosmos, there are endless propositions and
                                questions surrounding it. You are left to dream, and choose which ever theory you sounds
                                most believable for you and find yourself in the cosmos
                            </Typography>
                        </Col>

                        <Col sm="9" md="12" className="p-5">
                            <Typography variant="body2" customClass="text-center">
                                What is the specific sequence of events that occured on earth to give life, and allow
                                for humans to evolve is an extremley rare event, we could be the "first born" of the
                                universe. This could be the very first time, life has ever been able to evolve This is
                                one of the great things of the universe, there are endless propositions and endless
                                questions with regard to the comos, What if the specific chain of events that occured
                                for earth to give life, and allow for humans to evolve are extremley rare and we could
                                be one of "first born" in the universe. This could be the first time, that life has been
                                able to evolve, uninterupted by any cosmic threats and astrological disasters (sorry
                                dinosaurs).
                            </Typography>
                            <Typography variant="title">Find the Cosmos, Find yourself</Typography>
                            <Typography variant="body2" customClass="text-center">
                                Looking at things this way, can be pretty terrifying, the feeling of anxiety could be
                                overwhelming by thoughts of intergalatic lonliness. Though this could also be looked at
                                another way, this could contribute towards a positive transformation for our species on
                                how we treat one another on earth. It can help to motivate us to treat our planet and
                                all life on it, knowing that we may never find such prosperity elsewhere in the vast
                                cosmos.
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </FeatureTemplate.Content>
            <FeatureTemplate.Footer>
                <Typography variant="body2" customClass="text-center w-50">
                    Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this
                    vastness, there is no hint that help will come from elsewhere to save us from ourselves.
                </Typography>
                <Typography variant="body3">-Cark Sagan</Typography>
            </FeatureTemplate.Footer>
        </FeatureTemplate>
    );
};

export default HomePage;
