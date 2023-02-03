import React from "react";
import Image from "next/image";
import image from "../assets/investmentsPic.svg";
import mobileImage from "../assets/investsMobile.svg";

export default function Investments() {
  return (
    <div className="max-w-screen flex sm:flex-col justify-center items-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto h-[760px] sm:h-[840px] xl:h-[1350px] select-none">
      <div className="flex flex-col justify-center items-center text-center sm:text-left sm:items-start overflow-hidden gap-1">
        <h3 className="uppercase font-light px-2 text-[32px] leading-[39px] sm:pb-10 sm:text-4xl sm:pl-0 sm:items-start md:text-4xl lg:text-5xl xl:text-7xl xl:pb-14">
          Our investments
        </h3>

        <div>
          <p className="text-[15px] font-normal leading-[18px] px-10 py-16 sm:p-0 sm:w-1/2 sm:mr-0 sm:text-base xl:pr-36 xl:text-xl xl:leading-6 xl:w-2/3">
            We are always searching for talented and ambitious development teams
            who are passionate about creating innovative products and services
            that push the boundaries of the industry. We help these teams
            succeed by providing them with long-term engineering, business, and
            marketing support.
          </p>
        </div>
        <div className="sm:hidden flex pt-6">
          <Image src={mobileImage} alt="board pic" />
        </div>
      </div>

      <div className="hidden h-auto sm:flex sm:justify-end sm:pt-20 sm:w-full xl:pt-36">
        <Image
          src={image}
          className="sm:w-2/3 sm:flex sm:justify-end"
          alt="street pic"
        />
      </div>
    </div>
  );
}
