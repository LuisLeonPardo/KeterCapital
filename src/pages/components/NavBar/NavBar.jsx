import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";

import logo from "../assets/logo.svg";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <nav className="flex h-24 max-w-6xl m-auto lg:justify-between md:justify-around justify-around items-center z-10">
        <Image src={logo} alt="Keter Capital logo" priority={true} />
        <ul className="hidden sm:flex justify-between gap-10">
          <li>
            <Link href="#about" className="hover:border-b-[1px] border-black">
              About
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="hover:border-b-[1px] border-black"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#media" className="hover:border-b-[1px] border-black">
              Media
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex p-1 hover:border-b-[1px] border-black cursor-pointer">
          <Link href="">JOIN AS AN INVESTOR</Link>
        </div>
        <div
          onClick={handleClick}
          className="flex sm:hidden z-10 hover:cursor-pointer ml-20"
        >
          {!open ? (
            <BsThreeDotsVertical size="24" />
          ) : (
            <IoIosArrowBack size="24" />
          )}
        </div>
        {
          <nav
            className={
              !open
                ? "hidden"
                : "flex flex-col w-full h-5/6 absolute top-24 left-0 bg-[#FAFAFA]"
            }
          >
            <ul className="flex flex-col items-center uppercase text-[#242323]">
              <Link
                href="#about"
                className="py-5 flex justify-between items-center border-y-[1px] border-black w-9/12 "
              >
                <span>About</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
              <Link
                href="#portfolio"
                className="flex justify-between items-center py-5 w-9/12"
              >
                <span>Portfolio</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
              <Link
                href="#media"
                className="flex justify-between items-center py-5 border-y-[1px] border-black w-9/12"
              >
                <span>Media</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
            </ul>
            <div className="flex sm:hidden p-1 mt-14 m-auto hover:border-b-[1px] border-black cursor-pointer">
              <Link href="">JOIN AS AN INVESTOR</Link>
            </div>
            <h1 className="flex-end">HOla</h1>
          </nav>
        }
      </nav>
    </>
  );
}
