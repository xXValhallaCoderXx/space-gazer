import React from "react";
import {render} from "react-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import Routes from "./routes";
import "shared/styles/index.scss";
import {Mixpanel} from "shared/mixpanel";
const root = document.getElementById("render-app");

render(
  <ParallaxProvider>
    <Routes />
  </ParallaxProvider>,
  root,
);
