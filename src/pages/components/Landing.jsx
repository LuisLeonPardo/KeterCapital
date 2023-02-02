import React from "react";
import Navbar from "./NavBar.jsx";
import Home from "./Home.jsx";

export default function Landing() {
  return (
    <main className="flex flex-col items-center font-inter">
      <Navbar />
      <Home />
      <h1>Investments</h1>
      <h1>Catches</h1>
      <h1>Footer</h1>
    </main>
  );
}
