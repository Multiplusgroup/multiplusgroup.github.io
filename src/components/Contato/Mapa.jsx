import { CenterFocusStrong, ZoomIn, ZoomOut } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { forwardRef } from "react";
import {
  Marker as BaseMarker,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

const Marker = forwardRef((props, ref) => {
  return <BaseMarker ref={ref} {...props} />;
});

Marker.displayName = "Marker";

const CentralizaMapa = ({ pos }) => {
  const map = useMap();

  const handleCenter = () => {
    map.setZoom(18).setView(pos);
  };

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="Basic button group"
      className="bg-multi-brown relative top-5 left-5 z-[400] h-fit w-fit !rounded-lg"
      orientation="vertical"
    >
      <IconButton
        onClick={handleZoomIn}
        disableRipple
        className="!text-multi-green-light hover:!bg-multi-green-light hover:!text-multi-brown !rounded-none !rounded-t-lg transition-all duration-500"
      >
        <ZoomIn />
      </IconButton>
      <IconButton
        onClick={handleCenter}
        disableRipple
        className="!text-multi-green-light hover:!bg-multi-green-light hover:!text-multi-brown !rounded-none transition-all duration-500"
      >
        <CenterFocusStrong />
      </IconButton>
      <IconButton
        onClick={handleZoomOut}
        disableRipple
        className="!text-multi-green-light hover:!bg-multi-green-light hover:!text-multi-brown !rounded-none !rounded-b-lg transition-all duration-500"
      >
        <ZoomOut />
      </IconButton>
    </ButtonGroup>
  );
};

const Mapa = () => {
  const position = [-16.069417764329977, -47.98242069414757];
  const icon = Leaflet.icon({
    iconUrl: "/Site_Favicon.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
  });

  return (
    <>
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={true}
        className="map flex bg-transparent"
        fadeAnimation
        zoomControl={false}
        // attributionControl={false}
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
        <CentralizaMapa pos={position} />
      </MapContainer>
    </>
  );
};

export default Mapa;
