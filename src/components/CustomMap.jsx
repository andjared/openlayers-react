import React, { useEffect, useState } from "react";
import { Map } from "ol";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

function CustomMap() {
  const [map, setMap] = useState();
  const [center, setCenter] = useState([15.2, 45.1]);

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.mapbox.com/styles/v1/andja-z/clmz7sti002zy01r7eih71srx/tiles/256/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
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
    map.setTarget("map");
    setMap(map);
    //prevent multiple maps from being added to the map container on a re-render
    return () => map.setTarget("");
  }, []);

  return (
    <div
      id="map"
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
