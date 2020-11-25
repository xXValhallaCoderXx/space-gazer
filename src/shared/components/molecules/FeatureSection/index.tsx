import React from 'react';
import {Col, Row} from 'reactstrap';
const styles = require('./styles.module.scss');

interface IProps {
    title: string;
    text: string;
}

const FeatureSection = ({title, text}: IProps) => {
    return (
        <Col sm="9" md="12" className="p-5">
            <h2 className={styles.sub_title}>{title}</h2>
            <p className={styles.intro_text}>{text}</p>
        </Col>
    );
};

export default FeatureSection;
