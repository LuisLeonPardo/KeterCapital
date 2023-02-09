import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";

import logo from "../assets/logo.svg";
import FooterMobile from "../Footer/FooterMobile";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const [onTop, setOnTop] = useState(false);

  const headerClass = () => {
    if (window.pageYOffset < 260) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  return (
    <>
      <nav
        className={
          onTop
            ? `${
                open && "bg-[#FAFAFA]"
              } sm:bg-[#FAFAFA] fixed h-24 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-around sm:justify-around lg:justify-between z-10`
            : `${
                open && "bg-[#FAFAFA]"
              } backdrop-blur-2xl sm:bg-[#FAFAFA] fixed h-24 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-around sm:justify-around lg:justify-between z-10`
        }
      >
        <Image src={logo} alt="Keter Capital logo" priority />
        <ul className="hidden sm:flex justify-between gap-x-10">
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
                : "flex flex-col w-full h-screen absolute top-20 left-0 bg-[#FAFAFA]"
            }
          >
            <ul className="flex flex-col items-center uppercase text-[#242323] mt-4">
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
            <footer className="mb-20">
              <FooterMobile />
            </footer>
          </nav>
        }
      </nav>
    </>
  );
}
