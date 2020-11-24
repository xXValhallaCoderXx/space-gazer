import React from 'react';
const staturn = require('shared/images/planet-saturn.png');
const styles = require('./styles.module.scss');

const HomeFeature = () => {
    return (
        <div className={styles.home_feature_wrapper}>
            <img src={staturn} className={styles.home_feature_img} />
            <h3 className={styles.home_feature_title}>Solsar System</h3>
            <div>
                <p className={styles.home_feature_description}>10 Need-to-Know Things About the Solar System</p>
            </div>
        </div>
    );
};

export default HomeFeature;
