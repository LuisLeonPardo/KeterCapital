import React from "react";
import Navbar from "./NavBar/NavBar.jsx";

export default function Landing() {
  return (
    <>
      <main className="bg-[#FAFAFA] h-screen">
        <Navbar />
        <h1>Home</h1>
        <h1>Investments</h1>
        <h1>Catches</h1>
        <h1>Footer</h1>
      </main>
    </>
  );
}
