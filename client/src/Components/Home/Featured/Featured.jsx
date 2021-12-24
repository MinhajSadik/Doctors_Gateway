import { Button } from "@mui/material";
import React from "react";
import feature from "../../../images/treatment.png";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured_service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={feature} alt="treatment" />
          </div>
          <div className="col-md-7 align-self-center">
            <h2>
              <em>
                Exceptional Dental Care <br /> On Your Team
              </em>
            </h2>
            <p className="text-secondary my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae a
              eius totam possimus. Tempora deleniti reiciendis recusandae
              voluptates minus porro soluta expedita maxime, vel itaque minima
              deserunt libero eos commodi!
            </p>
            <Button variant="contained" style={{ backgroundColor: "#5CE7EK" }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
