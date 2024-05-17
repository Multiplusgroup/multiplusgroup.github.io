import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker as BaseMarker,
  Tooltip,
} from "react-leaflet";
import Leaflet from "leaflet";
import { forwardRef } from "react";

const Marker = forwardRef((props, ref) => {
  return <BaseMarker ref={ref} {...props} />;
});

Marker.displayName = "Marker";

const Map = () => {
  const position = [-16.069417764329977, -47.98242069414757];
  const icon = Leaflet.icon({
    iconUrl: "./Site_Favicon.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
  });
  return (
    <div className="mapContainer">
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Tooltip direction="top" offset={[0, -25]} opacity={1} permanent>
            <span>Multiplusgroup</span>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
