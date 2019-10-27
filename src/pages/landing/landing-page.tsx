// import React, {useState, useCallback} from "react";
// import {Card, CardBody} from "reactstrap";
// import {TiArrowDownOutline} from "react-icons/ti";
// import {useSpring, animated as a, useTransition} from "react-spring";
// import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
// import {LayoutMain, Popup, Sun} from "shared/components";

// import RubberBand from "react-reveal/RubberBand";
// import Pulse from "react-reveal/Pulse";
// import Jump from "react-reveal/Jump";

// const styles = require("./styles.module.scss");
// const spaceMan = require("shared/images/space-man-planet-1.png");
// const earth1 = require("shared/images/earth-1.png");
// const cloud1 = require("shared/images/clouds-1.png");
// const cloud2 = require("shared/images/clouds-2.png");
// const cloud3 = require("shared/images/clouds-3.png");
// const astro = require("shared/images/astro-1.png");
// const ship = require("shared/images/space-ship.png");
// const shipSmoke = require("shared/images/space-ship-smoke.png");
// const spaceSatellite = require("shared/images/space-satellite-1.png");
// const saucer1 = require("shared/images/flying-saucer-1.png");
// const airplane1 = require("shared/images/airplane-1.png");
// const tree1 = require("shared/images/tree-1.png");

// const LandingPage = () => {
//   const parallax = React.useRef(null);
//   const parallax2 = React.useRef(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const airplaneAnimate = useSpring({
//     to: {left: 1000, color: "#ffaaee"},
//     from: {left: 0, color: "red"}
//   });
//   const props = useSpring({
//     from: {left: -100},
//     to: {left: 1900},
//     config: {duration: 2000},
//     reset: true
//   });

//   function onItemClick() {
//     setIsOpen(true);
//   }

//   function togglePopup() {
//     setIsOpen(false);
//   }
//   return (
//     <LayoutMain nav>
//       <Parallax pages={3} ref={parallax}>
//         <ParallaxLayer offset={0} speed={0} className={styles.bg_wrapper_1}>
//           <ParallaxLayer offset={0.4} speed={0.3}>
//             <h1 className={`${styles.introText} text-center`}>
//               <RubberBand>Welcome to Space Gazer</RubberBand>
//             </h1>

//             <h2 className="text-center mt-5">
//               Lets get down to earth!
//               <br />
//               <Jump>
//                 <TiArrowDownOutline style={{color: "white", marginTop: 15}} />
//               </Jump>
//             </h2>
//           </ParallaxLayer>
//         </ParallaxLayer>
//         <ParallaxLayer offset={1} className={styles.bg_wrapper_2} />

//         <ParallaxLayer offset={2} speed={0} className={styles.bg_wrapper_3} />
//         <ParallaxLayer offset={0.5} speed={0.9}>
//           <div className={`${styles.quote_1}`}>
//             <h1 className="text-center">
//               Somewhere, something incredible,
//               <br /> is waiting to be known
//             </h1>
//             <p className="text-center">~Carl Sagan</p>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer offset={1} speed={0.8}>
//           <div className={`${styles.quote_2}`}>
//             <h1 style={{color: "white"}} className="text-center">
//               Begin your quest for the greatests mysteries,
//               <br /> to start, you only need but look up to the skies.
//             </h1>
//           </div>
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={3}>
//           <img className={styles.space_ship_img} src={ship} />
//           <Pulse duration={500} forever>
//             <img
//               className={styles.space_ship_smoke_img}
//               src={shipSmoke}
//               height="150"
//             />
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={0.6}>
//           <img
//             id="astro"
//             onClick={onItemClick}
//             className={`${styles.astro} ${styles.shadowfilter}`}
//             src={astro}
//             height="220"
//           />
//           <Popup
//             target="astro"
//             isOpen={isOpen}
//             toggle={togglePopup}
//             title="Meteorite"
//             description="Millions of meteoroids travel through Earth's atmosphere each day."
//           />
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={-0.1}>
//           <img
//             className={`${styles.flying_saucer_1} ${styles.shadowfilter}`}
//             src={saucer1}
//             height="210"
//           />
//         </ParallaxLayer>
//         <ParallaxLayer offset={0} speed={0} style={{zIndex: 102}}>
//           <img
//             src={spaceMan}
//             className={`${styles.space_man_1} ${styles.shadowfilter}`}
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={2} speed={0.7} style={{zIndex: 101}}>
//           <Pulse duration={3500} forever>
//             <img
//               className={`${styles.earth_img_1} ${styles.shadowfilter}`}
//               src={earth1}
//             />
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={2.3} speed={0.7} style={{zIndex: 100}}>
//           <img className={`${styles.tree_img_1}`} src={tree1} />
//         </ParallaxLayer>
//         <ParallaxLayer offset={2} speed={1}>
//           <Pulse duration={3500} forever>
//             <div className={styles.sun_img_1}>
//               <Sun />
//             </div>
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={2.8} speed={-0.5}>
//           <Pulse duration={2500} forever>
//             <img
//               className={`${styles.cloud_2_img} ${styles.shadowfilter}`}
//               src={cloud2}
//               height="130"
//             />
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={1.9} speed={-0.1}>
//           <Pulse duration={2500} forever>
//             <img
//               className={`${styles.cloud_1_img} ${styles.shadowfilter}`}
//               src={cloud1}
//               height="220"
//             />
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={0.9} speed={1}>
//           <img
//             src={spaceSatellite}
//             className={`${styles.space_satellite_1} ${styles.shadowfilter}`}
//           />
//         </ParallaxLayer>
//         <ParallaxLayer offset={1.2} speed={1}>
//           <img
//             src={airplane1}
//             className={`${styles.airplane_1} ${styles.shadowfilter}`}
//           />
//         </ParallaxLayer>
//         <ParallaxLayer offset={2} speed={0.9}>
//           <Pulse duration={2500} forever>
//             <img
//               className={`${styles.cloud_img_3} ${styles.shadowfilter}`}
//               src={cloud3}
//               height="130"
//             />
//           </Pulse>
//         </ParallaxLayer>
//         <ParallaxLayer offset={2.5} speed={0.9}>
//           <Card className={styles.card_info_bottom}>
//             <CardBody>
//               <p style={{marginBottom: -10, fontSize: 30, textAlign: "center"}}>
//               Click on the menu, To start exploring our universe!
//               </p>
//             </CardBody>
//           </Card>
//         </ParallaxLayer>
//       </Parallax>
//     </LayoutMain>
//   );
// };

// export default LandingPage;
