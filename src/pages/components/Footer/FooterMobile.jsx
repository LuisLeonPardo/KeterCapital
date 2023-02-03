import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export default function FooterMobile() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <h6 className="text-[#A7A4A4]">© 2023 KeterCapital.</h6>
      <div className="flex gap-x-4 px-2 py-4">
        <Link href="#">
          <FaLinkedinIn color="#A7A4A4" size={18} />
        </Link>
        <Link href="#">
          <BsTwitter color="#A7A4A4" size={18} />
        </Link>
      </div>
    </div>
  );
}
