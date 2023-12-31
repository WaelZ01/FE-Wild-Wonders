import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerCluster from "./Clusters";

const Leaflet = () => {
let markers;

const position = [26, 0]; //default 51.505, -0.09
const mapStyle = { height: "80vh" };

const addMarkers = () => {
markers = [];
for (let i = 0; i < 1000; i++) {
    markers.push({
    position: {
        lng: -122.673447 + Math.random() * 200.0,
        lat: 45.5225581 - 60 + Math.random() * 80
    }
    });
}
};

addMarkers();

return (
<>
    <MapContainer center={position} zoom={3} style={mapStyle} maxZoom={20}>
    <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <MarkerCluster markers={markers} addMarkers={addMarkers} />
    </MapContainer>
    <div>
    clearLayers and addLayers used. Look at the console to check performance
    </div>
</>
);
};

export default Leaflet;