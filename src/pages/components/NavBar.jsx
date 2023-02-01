import React, { useState } from "react";
import Image from "next/image";

import logo from "./assets/logo.svg";

export default function NavBar() {
  return (
    <>
      <nav className="flex">
        <div>
          <Image src={logo} alt="Keter Capital logo" />
        </div>
        <ul className="flex">
          <li>About</li>
          <li>Portfolio</li>
          <li>Media</li>
        </ul>
        <span>JOIN AS AN INVESTOR</span>
      </nav>
    </>
  );
}
