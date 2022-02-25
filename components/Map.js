import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import "mapbox-gl/dist/mapbox-gl.css";

function Maps({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //transform the search object for get tke center
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // Center of all place for the research
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/maujojo-jo/cl02fk855000214qixtbcog9y"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResult.map((result, index) => {
        return (
          <div key={index}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                className="text-2xl cursor-pointer animate-bounce"
                aria-label="push-pin"
                onClick={() => {
                  setSelectedLocation(result);
                }}
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                longitude={result.long}
                latitude={result.lat}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        );
      })}
    </Map>
  );
}

export default Maps;
