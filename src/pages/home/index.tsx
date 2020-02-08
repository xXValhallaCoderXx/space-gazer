import React from "react";
import {TiArrowDownOutline} from "react-icons/ti";
import {useSpring, animated} from "react-spring";
import {LayoutMain, Popup, Sun} from "shared/components";
import {Parallax} from "react-scroll-parallax";
import RubberBand from "react-reveal/RubberBand";
import LightSpeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";
import Jump from "react-reveal/Jump";
const styles = require("./home.module.scss");

const astro = require("shared/images/astro-1.png");
const airplane1 = require("shared/images/airplane-1.png");
const earth1 = require("shared/images/earth-1.png");
const ship = require("shared/images/space-ship.png");
const shipSmoke = require("shared/images/space-ship-smoke.png");
const spaceMan = require("shared/images/space-man-planet-1.png");
const cloud1 = require("shared/images/clouds-1.png");
const cloud2 = require("shared/images/clouds-2.png");
const spaceSatellite = require("shared/images/space-satellite-1.png");
// const saucer1 = require("shared/images/flying-saucer-1.png");

const calc = (x: any, y: any) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1: any = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2: any = (x: any, y: any) => `translate3d(${x / 8 + 45}px,${y / 8 - 230}px,0)`;

const HomePage = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState("");
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 10, tension: 550, friction: 140},
  }));

  const togglePopup = (type: string) => () => {
    if (type === isPopupOpen) {
      setIsPopupOpen("");
    } else {
      setIsPopupOpen(type);
    }
  };

  return (
    <LayoutMain nav>
      <section className={styles.bg_wrapper_1} onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
        <div className={styles.stars_small} />
        <div className={styles.stars_medium} />
        <div className={styles.stars_large} />
        <div className="d-flex justify-content-center">
          <div style={{maxWidth: 1500}}>
            <Parallax y={[800, -100]}>
              <RubberBand>
                <div>
                  <img id="space-man" src={spaceMan} className={`${styles.space_man_1} ${styles.glow}`} />
                  <Popup
                    target="space-man"
                    isOpen={isPopupOpen === "space-man"}
                    toggle={togglePopup("space-man")}
                    title="Greetings!"
                    description="Lets get down to earth! Click on anything interesting on your journey to know more!"
                  />
                </div>
              </RubberBand>
            </Parallax>

            <Parallax y={[100, -50]} tagOuter="figure">
              <div className={styles.titleWrapper}>
                <h1 className={`${styles.titleText} text-center`}>
                  <RubberBand>Welcome to Space Gazer</RubberBand>
                </h1>

                <RubberBand>
                  <h2 className={`${styles.titleCaption} text-center mt-3`}>
                    Lets get down to earth!
                    <br />
                    <Jump>
                      <TiArrowDownOutline style={{color: "white", marginTop: 15}} />
                    </Jump>
                  </h2>
                </RubberBand>
              </div>
            </Parallax>
            <Parallax y={[800, 100]}>
              <LightSpeed>
                <div className={`${styles.ufoWrapper} ${styles.glow}`}>
                  <animated.div id="ufo" className={styles.ufoBody} style={{transform: props.xy.interpolate(trans1)}} />
                  <animated.div className={styles.ufoEye} style={{transform: props.xy.interpolate(trans2)}} />
                  <Popup
                    target="ufo"
                    isOpen={isPopupOpen === "ufo"}
                    toggle={togglePopup("ufo")}
                    title="Are we alone?!"
                    description="It is said that we have never made contact with alien life, but are we really alone?"
                    link="/alone"
                  />
                </div>
              </LightSpeed>
            </Parallax>

            <Parallax y={[500, -80]}>
              <RubberBand>
                <div>
                  <img id="astro" className={`${styles.astro} ${styles.glow}`} src={astro} />
                  <Popup
                    target="astro"
                    isOpen={isPopupOpen === "astro"}
                    toggle={togglePopup("astro")}
                    title="Space Explorers!"
                    description="Astronaughts are explorers of space! Thanks to them we have made many discoveries!"
                    link={"/earth-orbit"}
                  />
                </div>
              </RubberBand>
            </Parallax>
            <Parallax y={[450, -100]}>
              <img id="ship" className={`${styles.space_ship_img} ${styles.glow}`} src={ship} />
              <Pulse duration={500} forever>
                <img className={styles.space_ship_smoke_img} src={shipSmoke} />
              </Pulse>
            </Parallax>
            <Parallax y={[700, 150]}>
              <div className={`${styles.quote_1}`}>
                <RubberBand>
                  <h1 className={`text-center ${styles.quote_1_text}`}>
                    Somewhere, something incredible,
                    <br /> is waiting to be known
                  </h1>
                  <p className="text-center">~Carl Sagan</p>
                </RubberBand>
              </div>
              <Popup
                target="ship"
                isOpen={isPopupOpen === "ship"}
                toggle={togglePopup("ship")}
                title="Space Travel!"
                description="These are our vessels that allow us to explore space"
                link={"/earth-orbit"}
              />
            </Parallax>
          </div>
        </div>
      </section>
      <section style={{marginTop: -1}} className={styles.bg_wrapper_2}>
        <div>
          <Parallax x={[50, -130]}>
            <img id="satellite" src={spaceSatellite} className={`${styles.space_satellite_1} ${styles.glow}`} />
            <Popup
              target="satellite"
              isOpen={isPopupOpen === "satellite"}
              toggle={togglePopup("satellite")}
              title="Communication!"
              description="There are thousands of these orbiting our earth right now, what are they for?"
              link={"/earth-orbit"}
            />
          </Parallax>
          <Parallax x={[-450, 90]}>
            <img id="airplane" src={airplane1} className={`${styles.airplane_1} ${styles.glow}`} />
            <Popup
              target="airplane"
              isOpen={isPopupOpen === "airplane"}
              toggle={togglePopup("airplane")}
              title="Something!"
              description="Something"
              link={"/earth-orbit"}
            />
          </Parallax>
          <Parallax y={[500, -50]}>
            <div className={`${styles.quote_2}`}>
              <RubberBand fraction={1}>
                <h1 className={`text-center text-light ${styles.quote_2_text}`}>
                  Begin your quest for the greatests mysteries,
                  <br /> to start, you only need but look up to the skies.
                </h1>
              </RubberBand>
            </div>
          </Parallax>
          <Parallax y={[200, 50]}>
            <div className={`${styles.sun} ${styles.glow}`}>
              <Sun id="sun" />
              <Popup
                target="sun"
                isOpen={isPopupOpen === "sun"}
                toggle={togglePopup("sun")}
                title="Sun"
                description="The giant of our Solar system, the sun is both worshiped, and feared, and rightfully so with its power to create and even destory life."
                link={"/earth"}
              />
            </div>
          </Parallax>
          <Parallax y={[250, 400]}>
            <Pulse duration={2500} forever>
              <img id="cloud1" className={`${styles.cloud_1_img} ${styles.glow}`} src={cloud1} />
              <Popup
                target="cloud1"
                isOpen={isPopupOpen === "cloud1"}
                toggle={togglePopup("cloud1")}
                title="Clouds"
                description="The clouds, they can ruin any of our sunny days, but they are vital for our eco system"
                link={"/earth"}
              />
            </Pulse>
          </Parallax>
          <Parallax y={[50, 250]}>
            <Pulse duration={2500} forever>
              <img id="cloud2" className={`${styles.cloud_2_img} ${styles.glow}`} src={cloud2} />
              <Popup
                target="cloud2"
                isOpen={isPopupOpen === "cloud2"}
                toggle={togglePopup("cloud2")}
                title="Clouds"
                description="The clouds, they can ruin any of our sunny days, but they are vital for our eco system"
                link={"/earth"}
              />
            </Pulse>
          </Parallax>
          <Parallax y={[0, 0]}>
            <div className={`${styles.quote_3}`}>
              <RubberBand fraction={1}>
                <h1 className={`text-center text-light ${styles.quote_3_text}`}>
                  We live on this speck called Earth, think about what you might do, today or tomorrow, and make the
                  most of it.
                </h1>
                <p className="text-center">~Neil deGrasse Tyson</p>
              </RubberBand>
            </div>
          </Parallax>
          <Pulse duration={3500} forever>
            <Popup
              target="earth"
              isOpen={isPopupOpen === "earth"}
              toggle={togglePopup("earth")}
              title="Earth"
              description="Our home! How is it possible that there is so much life on earth? But the other planets in our solar system are desserted?"
              link={"/earth"}
            />
            <img id="earth" className={`${styles.earth_img_1} ${styles.glow}`} src={earth1} />
          </Pulse>
        </div>
      </section>
    </LayoutMain>
  );
};

export default HomePage;
