import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";

const infoData = [
  {
    id: 1,
    title: "Opening Hours",
    description: "Monday to Friday: 8am to 6pm",
    icon: faClock,
    background: "primary",
  },
  {
    id: 2,
    title: "Visit Our Office",
    description: "123, Main Street, New York, USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    id: 3,
    title: "Call Us",
    description: "+(088)1781583107",
    icon: faPhone,
    background: "primary",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
