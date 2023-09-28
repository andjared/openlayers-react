import React, { useEffect, useState, useRef } from "react";
import { Map } from "ol";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

function CustomMap() {
  const [map, setMap] = useState();
  const [center, setCenter] = useState([15.2, 45.1]);
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
        center: fromLonLat(center),
        zoom: 7,
        minZoom: 0,
        maxZoom: 28,
      }),
    });
    map.setTarget(mapTargetElement.current || "");
    setMap(map);
    //prevent multiple maps from being added to the map container on a re-render
    return () => map.setTarget("");
  }, []);

  return (
    <div
      ref={mapTargetElement}
      className="map"
      style={{
        width: "760px",
        height: "360px",
        position: "relative",
        margin: "120px auto",
      }}
    ></div>
  );
}

export default CustomMap;
