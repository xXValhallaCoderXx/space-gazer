import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {QUOTES, SOLAR_SYSTEM_OPTIONS} from 'shared/constants/quotes';

import FeatureTemplate from 'shared/templates/feature-layout';
import {Intro} from './topics';

const MoonsHome = (props: RouteComponentProps<any>) => {
    function onChange(data: any) {
        props.history.push(`/solar-system/planets/${data.value}`);
    }

    return (
        <FeatureTemplate>
            <FeatureTemplate.Hero title="Moons" quote={QUOTES.clementStone.quote} author={QUOTES.clementStone.author} />
            <FeatureTemplate.StickyBarSections
                text="Select Topic"
                tab={props.match.params.tab}
                options={SOLAR_SYSTEM_OPTIONS}
                onChange={onChange}
            />
            <FeatureTemplate.Content>
                <Intro />
            </FeatureTemplate.Content>
        </FeatureTemplate>
    );
};

export default MoonsHome;
