import React from "react";
import Navbar from "./NavBar/NavBar";
import Home from "./Home.jsx";
import FooterDesktop from "./Footer/FooterDesktop";
import FooterMobile from "./Footer/FooterMobile";

export default function Landing() {
  return (
    <main className="bg-[#FAFAFA] flex flex-col items-center font-inter">
      <Navbar />
      <Home />
      <footer className="w-full">
        <div className="sm:hidden flex">
          <FooterMobile />
        </div>
        <div className="sm:flex hidden ">
          <FooterDesktop />
        </div>
      </footer>
    </main>
  );
}
