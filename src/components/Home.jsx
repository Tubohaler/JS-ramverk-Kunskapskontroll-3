import React from "react";
import { Helmet } from "react-helmet-async";
import oddTaxi from "../assets/oddTaxi.jpeg";

function Home() {
  return (
    <div>
      <Helmet>Home</Helmet>

      <h1>Välkommen till Cockasian!</h1>

      <p>Vi erbjuder de bästa mecha robotarna från Japan.</p>

      <img className="openingIMG" src={oddTaxi} alt="teddybear" width="400px" />

      <button></button>
    </div>
  );
}

export default Home;
