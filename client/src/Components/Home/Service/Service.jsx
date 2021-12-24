import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Services from "../Services/Services";

const serviceData = [
  {
    id: 1,
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    id: 1,
    name: "Cavity Fillings",
    img: cavity,
  },
  {
    id: 1,
    name: "Teeth Whitening",
    img: whitening,
  },
];

const Service = () => {
  return (
    <secrion className="services_container">
      <div className="text-center mt-5">
        <h5 style={{ color: "#1cc7c1" }}>Our Services</h5>
        <h1>Servies We Provided</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 ">
          {serviceData.map((service) => (
            <Services key={service.id} service={service} />
          ))}
        </div>
      </div>
    </secrion>
  );
};

export default Service;
