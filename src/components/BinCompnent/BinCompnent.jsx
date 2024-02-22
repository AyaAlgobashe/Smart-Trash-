import React from "react";
import "./bins.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BinCompnent = ({
  data,
  handleDeleteBin,
  handleToggleUpdateModal,
  handleToggleMapModal,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Bin Details</h1>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                border: "none",
                background: "none",
                padding: 0,
                color: "gray",
              }}
            >
              <MoreVertIcon fontSize="small" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleToggleMapModal(data._id)}>
                View
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleToggleUpdateModal(data._id)}>
                Udpate
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("../Trashes")}>
                Show on map
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="text-danger"
                onClick={() => handleDeleteBin(data)}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar
              value={data.status}
              text={`${data.status}%`}
              strokeWidth={7}
              styles={buildStyles({
                pathTransition: true,
                strokeLinecap: "round",
                trailColor: "#d6d6d6",
                pathColor:
                  data.status > 50 && data.status < 70
                    ? "rgb(255, 191, 0)"
                    : data.status > 70 && data.status <= 100
                    ? "rgb(220, 6, 6)"
                    : "#337c2b",
                textColor:
                  data.status > 50 && data.status < 70
                    ? "rgb(255, 191, 0)"
                    : data.status > 70 && data.status <= 100
                    ? "rgb(220, 6, 6)"
                    : "#337c2b",
              })}
            />
          </div>
          <p className="title">Total Trash now</p>
          {/* <p className="amount">$420</p> */}
          {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p> */}
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Serial Number</div>
              <div className="itemResult negative">
                <div className="resultAmount">{data.serialNumber}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Latitude</div>
              <div className="itemResult positive newsBar">
                <div className="resultAmount newsBarText">{data.latitude}</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Longitude</div>
              <div className="itemResult positive newsBar">
                <div className="resultAmount newsBarText">{data.longitude}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BinCompnent;
