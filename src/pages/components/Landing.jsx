import React from "react";
import Navbar from "./NavBar/NavBar";
import Home from "./Home/Home.jsx";
import Investments from "./Investments/Investments";

export default function Landing() {
  return (
    <main className="bg-[#FAFAFA] flex flex-col items-center font-inter">
      <Navbar />
      <Home />
      <Investments />
      <h1>Catches</h1>
      <h1>Footer</h1>
    </main>
  );
}
