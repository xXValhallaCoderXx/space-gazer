import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { QUOTES, PLANET_DROPDOWN_OPTIONS } from "shared/constants/quotes"

import FeatureTemplate from "shared/templates/feature-layout"
import { Intro } from "./topics";

const PlanetsHome = (props: RouteComponentProps<any>) => {
  function onChange(data: any) {
    props.history.push(`/solar-system/planets/${data.value}`);
  }


  return (
    <FeatureTemplate>
      <FeatureTemplate.Hero title="The Solar System" quote={QUOTES.robertSherwood.quote} author={QUOTES.robertSherwood.author} />
      <FeatureTemplate.StickyBarSections text="Select Topic" tab={props.match.params.tab} options={PLANET_DROPDOWN_OPTIONS} onChange={onChange} />
      <FeatureTemplate.Content>
        <Intro />
      </FeatureTemplate.Content>
    </FeatureTemplate>
  );
};

export default PlanetsHome;
