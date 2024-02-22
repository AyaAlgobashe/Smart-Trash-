import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import binIcon from "../../assets/images/MapIcons/binIcon.png";
import { ProgressBar } from "react-bootstrap";
import dateFormatter from "../../utils/dateFormatter.util";
const BinView = ({ data }) => {
  return (
    <>
      <MapContainer
        style={{
          width: "100%",
          height: "500px",
        }}
        center={[data.latitude, data.longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: binIcon,
              iconSize: [41],
              iconAnchor: [12, 41],
            })
          }
          position={[data.latitude, data.longitude]}
        >
          <Tooltip
            direction="auto"
            offset={[10, 10]}
            opacity={1}
            permanent
          >
            <div className="d-flex flex-column">
              <p className="text-center fw-bold">
                Serial Number :{data.serialNumber}
              </p>
              <p className="text-center fw-bold">
                Last Update :
                <span className="text-success">
                  {dateFormatter(data.updatedAt)}
                </span>
              </p>
              <ProgressBar
                variant={
                  data.status > 50 && data.status < 70
                    ? "warning"
                    : data.status > 70 && data.status <= 100
                    ? "danger"
                    : "success"
                }
                now={data.status}
                label={`${data.status}%`}
              />
            </div>
          </Tooltip>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </>
  );
};

export default BinView;
