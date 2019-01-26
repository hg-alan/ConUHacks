import React, { Component } from "react";
import vegaEmbed from "vega-embed";

var spec =
  "https://raw.githubusercontent.com/vega/vega/master/docs/examples/bar-chart.vg.json";

vegaEmbed("#map", spec)
  .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

class Map extends Component {
  render() {
    return <div id="map" />;
  }
}

export default Map;
