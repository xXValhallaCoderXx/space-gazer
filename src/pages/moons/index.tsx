import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';

const SolarSystemRoutes = () => {
    return (
        <Switch>
            <Route exact path="/moons" component={Home} />
        </Switch>
    );
};

export default SolarSystemRoutes;
