import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Detail from './Detail';

const SolarSystemRoutes = () => {
    return (
        <Switch>
            <Route exact path="/solar-system" component={Home} />
            <Route exact path="/solar-system/solar-system" component={Detail} />
        </Switch>
    );
};

export default SolarSystemRoutes;
