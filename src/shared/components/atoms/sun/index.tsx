import React from "react";
const styles = require("./styles.module.scss");

interface IProps {
  id: string;
}

const Sun = (props: IProps) => {
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
