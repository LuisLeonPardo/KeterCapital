import React, { useState } from "react";
import Link from "next/link";

export default function FooterDesktop() {
  return (
    <div className="w-full h-[374px] flex justify-center items-center">
      <div className="flex gap-x-28 lg:w-1/2">
        <div className="w-52 h-28 flex flex-col gap-y-9">
          <h1 className=" text-lg text-[#242323] ">Find us in social media:</h1>
          <div className="flex flex-col">
            <Link href="#" className=" text-sm">
              Linkedin
            </Link>
            <Link href="#" className=" text-sm">
              Twitter
            </Link>
          </div>
        </div>
        <div className="w-52 h-28 flex flex-col gap-y-9 ">
          <h1 className="text-lg">Contacts:</h1>
          <Link href="#" className=" text-sm">
            hello@keter.com
          </Link>
        </div>
      </div>
      <div className="text-sm mt-3">
        <Link href="#" className="">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
