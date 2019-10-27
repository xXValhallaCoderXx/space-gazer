import React from "react";
const styles = require("./styles.module.scss");

const Sun = () => {
  return (
    <>
      <div className={styles.top} />
      <div className={styles.wrapper}>
        <div className={styles.sun} />
      </div>
      <div className={styles.bottom} />
    </>
  );
};
export default Sun;
