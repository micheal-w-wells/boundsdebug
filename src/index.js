import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles.css";

const App = () => {
  const bounds = {
    _southWest: { lat: -43.484812128916026, lng: -16.787109375000004 },
    _northEast: { lat: -6.35897532723566, lng: 24.697265625000004 }
  };

  return (
    <div>
      <Map bounds={bounds}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
