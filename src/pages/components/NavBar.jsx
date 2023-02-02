import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";

import logo from "./assets/logo.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <>
      <nav className="h-24 flex sm:justify-around lg:justify-between justify-around items-center max-w-6xl m-auto z-10">
        <Image src={logo} alt="Keter Capital logo" priority={true} />
        <ul className="hidden sm:flex justify-between gap-10 text-[#242323] ">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="">Media</Link>
          </li>
        </ul>
        <Link
          href=""
          className="hidden sm:flex cursor-pointer p-1 hover:border-b-[1px] border-black"
        >
          JOIN AS AN INVESTOR
        </Link>
        <div
          onClick={handleClick}
          className="z-10 hover:cursor-pointer flex sm:hidden pl-20"
        >
          {!open ? (
            <BsThreeDotsVertical size="24" />
          ) : (
            <IoIosArrowBack size="24" />
          )}
        </div>
        {
          <nav
            className={`${
              !open
                ? "hidden"
                : "absolute top-24 left-0 w-full h-4/6 flex flex-col bg-[#FAFAFA]"
            }`}
          >
            <ul className="flex flex-col uppercase items-center text-[#242323]">
              <Link
                href=""
                className="py-5 border-y-[1px] border-black w-9/12 flex justify-between items-center"
              >
                <span>About</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
              <Link
                href=""
                className="py-5 w-9/12 flex justify-between items-center"
              >
                <span>Portfolio</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
              <Link
                href=""
                className="py-5 border-y-[1px] border-black w-9/12 flex justify-between items-center"
              >
                <span>Media</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
            </ul>
            <Link
              href=""
              className="sm:hidden mt-14 m-auto flex cursor-pointer p-[1px] hover:border-b-[1px] border-black"
            >
              JOIN AS AN INVESTOR
            </Link>
          </nav>
        }
      </nav>
    </>
  );
}
