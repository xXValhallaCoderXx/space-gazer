import React from "react";
import {useSpring, animated} from "react-spring";
const styles = require("./styles.module.scss");

const calc = (x: any, y: any) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1: any = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2: any = (x: any, y: any) => `translate3d(${x / 8 + 45}px,${y / 8 - 230}px,0)`;

const UfoMouseParallax = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 10, tension: 550, friction: 140},
  }));
  return (
    <div onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
      <animated.div className={styles.item1} style={{transform: props.xy.interpolate(trans1)}} />
      <animated.div className={styles.item2} style={{transform: props.xy.interpolate(trans2)}} />
    </div>
  );
};

export default UfoMouseParallax;
