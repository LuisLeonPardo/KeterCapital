import React from "react";
import Image from "next/image";
import image from "./assets/menIsSuits.svg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto h-[840px]">
      <div className="sm:w-1/2">
        <Image src={image} alt="meeting pic" />
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left sm:w-1/2 overflow-hidden gap-1">
        <h3 className="bg-black text-white uppercase font-light p-2 sm:text-3xl xl:text-7xl">
          YOU DREAM IT,
        </h3>
        <h3 className="text-7xl uppercase font-light p-2 pb-12 sm:text-3xl xl:text-7xl">
          WE INVEST
        </h3>

        <div>
          <p className="text-base font-normal leading-5 p-2 sm:pr-8 xl:pr-36 ">
            Even small financing are life-changing for some entrepreneurs, which
            can lead to the exorbitant success of your project.
          </p>
        </div>

        <div className="pt-10">
          <h3 className="font-normal text-xl uppercase underline pl-2 mt-24 cursor-pointer">
            Schedule a Meeting
          </h3>
        </div>
      </div>
    </div>
  );
}
