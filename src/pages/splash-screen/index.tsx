import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Container} from 'reactstrap';
import Typing from 'react-typing-animation';
const styles = require('./styles.module.scss');

const IntroPage = (props: RouteComponentProps<any>) => {
    function onFinishedTyping() {
        props.history.push('/home');
    }
    return (
        <Container fluid className={styles.bg_wrapper_1}>
            <h1 className={styles.title}>Space Gazer</h1>
            <div className={styles.atom}>
                <div className={styles.electron} />
                <div className={styles.electron} />
                <div className={styles.electron} />
            </div>
            <div style={{height: 30}}>
                <Typing hideCursor={true} onFinishedTyping={onFinishedTyping}>
                    <span>Loading cats into rocket...</span>
                    <Typing.Reset count={1} delay={500} />
                    <span>Preparing tasty snacks... </span>
                    <Typing.Reset count={1} delay={500} />
                    <span>Launch! </span>
                    <Typing.Reset count={1} delay={600} />
                </Typing>
            </div>
        </Container>
    );
};

export default IntroPage;
