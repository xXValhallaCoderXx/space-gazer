import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import Detail from './Detail';

const PlanetsRoutes = () => {
    return (
        <Switch>
            <Route exact path="/planets" component={Home} />
            <Route exact path="/planets/:id" component={Detail} />
        </Switch>
    );
};

export default PlanetsRoutes;
