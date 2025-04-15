"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Search from "../search/search";

export function NavBar() {
  const Links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Explore",
      href: "/explore",
    },
    {
      text: "About us",
      href: "/about-us",
    },
    {
      text: "Help & Support",
      href: "/help-and-support",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [searh, setSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 border-b border-[#D7CFF9]">
      <div className="lg:mx-32 flex items-center justify-between">
        <div className="">
          <Link href="/">
            <Image src="logo.svg" width={27} height={27} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4 ml-6">
            {Links.map((link) => (
              <li
                key={link.text}
                className="text-[#444444] hover:text-purple-600"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center justify-center gap-6 relative hidden md:flex">
          <Search />
          <button className="bg-[#644FC1] py-3 px-7 rounded-xl text-sm text-white">
            Sign in
          </button>
        </div>
        <div className="md:hidden">
          <div className="flex">
            <button onClick={() => setSearch(!searh)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 md:hidden text-[#644FC1] mr-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button
              className="md:hidden focus:outline-none focus:ring focus:ring-purple-500"
              onClick={toggleMenu}
            >
              <svg
                className="size-9 text-[#644FC1]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {searh && (
        <div className="md:hidden mt-2 w-full relative">
          <Search />
        </div>
      )}

      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2">
          <li>
            <a href="#" className="block text-gray-800 hover:text-purple-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-800 hover:text-purple-600">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-800 hover:text-purple-600">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-800 hover:text-purple-600">
              Help & Support
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-800 hover:text-purple-600">
              Sign in
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
