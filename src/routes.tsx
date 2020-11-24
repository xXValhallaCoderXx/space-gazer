import React from 'react';
import {hot} from 'react-hot-loader';
import {ParallaxProvider} from 'react-scroll-parallax';

import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import SolarSystemModule from 'pages/solar-system';

import {Home, About, NotFound, SplashScreen, Alone} from './pages';

const history = createBrowserHistory();

const Routes = () => {
    return (
        <ParallaxProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/alone" component={Alone} />
                    <Route path="/solar-system" component={SolarSystemModule} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ParallaxProvider>
    );
};

export default hot(module)(Routes);
