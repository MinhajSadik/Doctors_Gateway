import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 info_card">
      <div className={`d-flex info_container info-${info.background}`}>
        <div className="">
          <FontAwesomeIcon className="info_icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
