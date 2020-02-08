import React from "react";
const styles = require("./styles.module.scss");

interface Props {
  src: any;
  caption: string;
  className?: any;
  height?: string;
}

const ImageHoverCaption = (props: Props) => {
  return (
    <div className={styles.img_container}>
      <img src={props.src} height={props.height} className={`${styles.img_styles} ${props.className}`} />
      <div className={styles.middle}>
        <div className={styles.text}>{props.caption}</div>
      </div>
    </div>
  );
};

export default ImageHoverCaption;
