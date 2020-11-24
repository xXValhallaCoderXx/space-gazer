import React from 'react';
import {hot} from 'react-hot-loader';
import {ParallaxProvider} from 'react-scroll-parallax';

import {Route, Switch} from 'react-router-dom';

import SolarSystemModule from './solar-system';
import PlanetsModule from './planets';
import MoonsModule from './moons';

const SolarSystemRoutes = () => {
    return (
        <Switch>
            <Route exact path="/solar-system/main" component={SolarSystemModule} />
            <Route exact path="/solar-system/main/:tab" component={SolarSystemModule} />
            <Route exact path="/solar-system/planets" component={PlanetsModule} />
            <Route exact path="/solar-system/planets/:tab" component={PlanetsModule} />
            <Route exact path="/solar-system/moons" component={MoonsModule} />
            <Route exact path="/solar-system/moons/:tab" component={MoonsModule} />
        </Switch>
    );
};

export default SolarSystemRoutes;
