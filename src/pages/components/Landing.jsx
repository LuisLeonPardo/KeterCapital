import React from "react";
import Navbar from "./NavBar/NavBar";
import Home from "./Home/Home.jsx";
import Investments from "./Investments/Investments";
import Catches from "./Catches/Catches";
import FooterDesktop from "./Footer/FooterDesktop";
import FooterMobile from "./Footer/FooterMobile";

export default function Landing() {
  return (
    <main className="bg-[#FAFAFA] flex flex-col items-center font-inter">
      <Navbar />
      <Home />
      <Investments />
      <Catches />
      <footer className="w-full">
        <div className="sm:hidden flex mt-2">
          <FooterMobile />
        </div>
        <div className="sm:flex m-auto hidden sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl items-center justify-around sm:justify-around lg:justify-between">
          <FooterDesktop />
        </div>
      </footer>
    </main>
  );
}
