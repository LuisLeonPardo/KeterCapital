import React from "react";
import Image from "next/image";
import image from "../assets/menInSuits.svg";

export default function Home() {
  return (
    <div className="sm:bg-none bg-men bg-cover max-w-screen flex flex-col-reverse sm:flex-row justify-center items-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto h-[760px] sm:h-[840px]">
      <div className="hidden sm:flex sm:w-1/2">
        <Image src={image} alt="meeting pic" />
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left sm:w-1/2 overflow-hidden gap-1">
        <h3 className="bg-black text-white uppercase font-light px-2 mt-44 sm:p-2 text-[39px] leading-[68px] sm:ml-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          YOU DREAM IT,
        </h3>
        <h3 className="text-[39px] uppercase font-light p-2 pb-12 sm:text-3xl md:text-4xl sm:pl-8 lg:text-5xl xl:text-7xl">
          WE INVEST
        </h3>

        <div>
          <p className="text-base font-normal leading-5 px-8 sm:pr-8 xl:pr-36 ">
            Even small financing are life-changing for some entrepreneurs, which
            can lead to the exorbitant success of your project.
          </p>
        </div>

        <div className="pt-10 sm:pb-11 md:pb-10">
          <h3 className="font-normal text-xl uppercase underline pl-2 sm:mb-32 md:mb-28 sm:pl-8 cursor-pointer px-3">
            Schedule a Meeting
          </h3>
        </div>
      </div>
    </div>
  );
}
