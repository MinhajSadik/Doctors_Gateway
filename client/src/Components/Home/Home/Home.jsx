import React from "react";
import Appointment from "../Appointment/Appointment";
import Featured from "../Featured/Featured";
import Header from "../Header/Header";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <Featured />
      <Appointment />
    </div>
  );
};

export default Home;
