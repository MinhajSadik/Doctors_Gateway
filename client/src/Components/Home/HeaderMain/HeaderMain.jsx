import React from "react";
import chair from "./../../../images/new-chair.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3a4256" }}>
          <em>
            Your Smile <br /> Start Here
          </em>
        </h1>
        <p className="text-secondary">
          <em>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nisi ad non est quisquam quo similique eum soluta qui corporis
            blanditiis voluptas corrupti sunt sint adipisci, autem fugiat,
            debitis omnis. Placeat repellat eveniet nulla harum incidunt tempore
            voluptatibus debitis ut, quasi omnis aut quam error ducimus
            suscipit, voluptatum veritatis laborum.
          </em>
        </p>
        <button className="btn btn-danger">Get Appointment</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
