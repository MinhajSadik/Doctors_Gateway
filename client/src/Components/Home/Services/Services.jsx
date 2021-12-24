import React from "react";

const Services = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "50px" }} src={service.img} alt={service.name} />
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        perferendis est sed? Laborum quis ex eveniet exercitationem hic
        repudiandae sed libero expedita eius maxime ea tempore voluptatibus,
        asperiores cumque atque.
      </p>
    </div>
  );
};

export default Services;
