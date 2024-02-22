import React, { useEffect, useState } from "react";
import {
  Circle,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  ScaleControl,
  Tooltip,
  Polyline,
} from "react-leaflet";
import mapIcon from "../../assets/images/MapIcons/marker-icon-2x.png";
import binIcon from "../../assets/images/MapIcons/binIcon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button, ProgressBar } from "react-bootstrap";
import dateFormatter from "../../utils/dateFormatter.util";
import SmartModal from "../Modal/SmartModal";
import RoleAuthorization from "../../utils/RoleAuthorization";
import { useAppDispatch } from "../../store/hooks";

const BinsMap = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [messages, setMessages] = useState([]);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // Create a WebSocket instance and provide the WebSocket server URL
    const socket = new WebSocket("ws://localhost:8080");

    // WebSocket event handlers
    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      // You can send initial messages or perform any required actions upon connection
      // socket.send("Hello Server!");
    };

    socket.onmessage = (event) => {
      // Process the received message from the WebSocket server
      const receivedData = JSON.parse(event.data);
      console.log("Received message:", receivedData);
      setMessages((prevMessages) => [...prevMessages, receivedData]);
    };

    socket.onclose = (event) => {
      console.log("Disconnected from WebSocket server");
      // Perform any required cleanup or handle disconnection
      // dispatch(GetAllBins()).then((res) => {
      //   console.log(res);
      //   if (res.meta.requestStatus === "fulfilled") {
      //     toast("hi");
      //   }
      // });
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const center = [30.580790557354756, 31.008333116358255];
  const limeOptions = { color: "lime" };
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const mapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    return position === null ? null : (
      <Marker
        icon={
          new Icon({
            iconUrl: mapIcon,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
        position={position}
      >
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <MapContainer
          style={{
            width: "90vw",
            height: "90vh",
          }}
          center={center}
          zoom={15}
        >
          <Polyline pathOptions={limeOptions} positions={[center]} />
          <TileLayer attribution={attribution} url={mapUrl} />
          <LayersControl position="topright">
            {messages[messages.length - 1]?.data.map((bin, index) => (
              <LayersControl.Overlay
                key={bin._id}
                name={bin.serialNumber}
                checked
              >
                <Marker
                  icon={
                    new Icon({
                      iconUrl: binIcon,
                      iconSize: [41],
                      iconAnchor: [12, 41],
                    })
                  }
                  position={[bin.latitude, bin.longitude]}
                >
                  <RoleAuthorization admin>
                    <Popup>
                      <Button onClick={() => setModalShow(true)}>
                        View Details
                      </Button>
                    </Popup>
                  </RoleAuthorization>

                  <Tooltip
                    direction="auto"
                    offset={[10, 10]}
                    opacity={1}
                    permanent
                    sticky
                  >
                    <div className="d-flex flex-column">
                      <p className="text-center fw-bold">
                        Serial Number :{bin.serialNumber}
                      </p>
                      <p className="text-center fw-bold">
                        Last Update :
                        <span className="text-success">
                          {dateFormatter(bin.updatedAt)}
                        </span>
                      </p>
                      <ProgressBar
                        variant={
                          bin.status > 50 && bin.status < 70
                            ? "warning"
                            : bin.status > 70 && bin.status <= 100
                            ? "danger"
                            : "success"
                        }
                        now={bin.status}
                        label={`${bin.status}%`}
                      />
                    </div>
                  </Tooltip>
                </Marker>
              </LayersControl.Overlay>
            ))}
          </LayersControl>
          {/* <LocationMarker /> */}
          <ScaleControl position="bottomleft" />
        </MapContainer>
      </div>
      <SmartModal  show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default BinsMap;
