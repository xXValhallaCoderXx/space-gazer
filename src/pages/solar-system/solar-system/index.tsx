import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

import {QUOTES, OPTIONS} from './constants';

import {Intro, SolarSystem} from './topics';
import FeatureTemplate from 'shared/templates/feature-layout';

const HomePage = (props: RouteComponentProps<any>) => {
    function onChange(data: any) {
        props.history.push(`/solar-system/main/${data.value}`);
    }

    function renderPage() {
        switch (props.match.params.tab) {
            case 'solar-system':
                return <SolarSystem />;
            default:
                return <Intro />;
        }
    }
    return (
        <FeatureTemplate>
            <FeatureTemplate.Hero title="The Solar System" quote={QUOTES.pauloCoelho} author="Paulo" />
            <FeatureTemplate.StickyBarSections
                text="Select Topic"
                tab={props.match.params.tab}
                options={OPTIONS}
                onChange={onChange}
            />
            <FeatureTemplate.Content>{renderPage()}</FeatureTemplate.Content>
        </FeatureTemplate>
    );
};

export default HomePage;
