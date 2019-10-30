import React from "react";
import {hot} from "react-hot-loader";
import {ParallaxProvider} from "react-scroll-parallax";

import {Route, Router, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";

import {
  Home,
  SolarSystem,
  Moons,
  Planets,
  About,
  NotFound,
  Loading,
  Alone
} from "./pages";

const history = createBrowserHistory();

const Routes = () => {
  return (
    <ParallaxProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/alone" component={Alone} />
          <Route exact path="/solar-system/main" component={SolarSystem} />
          <Route exact path="/solar-system/main/:tab" component={SolarSystem} />
          <Route exact path="/solar-system/planets" component={Planets} />
          <Route exact path="/solar-system/planets/:tab" component={Planets} />
          <Route exact path="/solar-system/moons" component={Moons} />
          <Route exact path="/solar-system/moons/:tab" component={Moons} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ParallaxProvider>
  );
};

export default hot(module)(Routes);
