import React from 'react';
const styles = require('./styles.module.scss');

interface Props {
    id: string;
}

const Sun = (props: Props) => {
    return (
        <>
            <div className={styles.top} />
            <div className={styles.wrapper}>
                <div id={props.id} className={styles.sun} />
            </div>
            <div className={styles.bottom} />
        </>
    );
};
export default Sun;
