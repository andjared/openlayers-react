import React, { useEffect, useState, useRef } from "react";
// import "ol/ol.css";

import { Map } from "ol";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import XYZ from "ol/source/XYZ";

function CustomMap() {
  const [map, setMap] = useState();
  const mapTargetElement = useRef(null);

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://api.mapbox.com/styles/v1/andja-z/clmz7sti002zy01r7eih71srx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kamEteiIsImEiOiJja3g2NHN6aTIwMDI2MnFtdXRobzhwMTFzIn0.g8g-84TIv5w9txhjy84dZw",
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 0,
        minZoom: 0,
        maxZoom: 28,
      }),
    });
    map.setTarget(mapTargetElement.current || "");
    setMap(map);

    console.log(map);
    //prevent multiple maps from being added to the map container on a re-render
    return () => map.setTarget("");
  }, []);

  return (
    <div
      ref={mapTargetElement}
      className="map"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    ></div>
  );
}

export default CustomMap;
