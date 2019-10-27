import React from "react";
import Page from "./solar-system-page";
import {RouteComponentProps} from "react-router-dom";

const SolarSystemContainer = (props: RouteComponentProps<any>) => {
  const [category, setCategory] = React.useState(
    props.match.params.tab || "solar"
  );

  function onTopicChange(url: any) {
    setCategory(url.value);
    console.log("URL: ", url);
    props.history.push(`/solar-system/${url.value}`);
  }
  return (
    <Page
      catergory={category}
      onTopicChange={onTopicChange}
      history={props.history}
    />
  );
};

export default SolarSystemContainer;
