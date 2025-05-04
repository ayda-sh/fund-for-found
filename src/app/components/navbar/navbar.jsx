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
      href: "#",
    },
    {
      text: "Help & Support",
      href: "#",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [searh, setSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="p-4 border-b border-[var(--primary-100)] w-full bg-white">
        <div className="flex max-w-[1024px] items-center mx-auto justify-between">
          <div className="">
            <Link href="/">
              <Image src="/images/logo.svg" width={27} height={27} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-4 ml-6">
              {Links.map((link) => (
                <li
                  key={link.text}
                  className="text-[#444444] hover:text-[var(--primary)]"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="items-center justify-center gap-2 hidden md:flex">
            <Search />
            <a
              href="/sign-up"
              className="bg-[var(--primary)] py-3 px-7 rounded-xl text-sm text-white"
            >
              Sign in
            </a>
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
                  className="size-8 md:hidden text-[var(--primary)] mr-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <button className="md:hidden focus:outline-none focus:ring focus:ring-purple-500" onClick={toggleMenu}>
              
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-9 text-[var(--primary)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="size-9 text-[var(--primary)]"
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
                )}
              </button>
            </div>
          </div>
        </div>

        {searh && (
          <div className="md:hidden mt-2 w-full relative">
            <Search />
          </div>
        )}

        
      </nav>
      {isOpen && (
          <div className="absolute flex flex-col justify-between z-40 h-[600px] bg-white w-full border-l border-r border-b border-[var(--light-3)] border-t-0 rounded-bl-2xl rounded-br-2xl">
          <div className="p-6">
          <ul className="md:hidden flex flex-col space-y-3.5 mt-2">
            <li>
              <a
                href="/"
                className="block text-[var(--primary)] text-[18px]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/explore"
                className="block text-[var(--primary)] text-[18px]"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[var(--primary)] text-[18px]"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[var(--primary)] text-[18px]"
              >
                Help & Support
              </a>
            </li>
            
          </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-[var(--light-3)]">
           
           <button className="mt-9 bg-[var(--primary-75)] mx-6 text-[var(--primary)] py-2 rounded border border-[var(--primary-200)]"><Link href="/login">login/signup</Link></button>
           <button className="mb-9 bg-[var(--primary)] mx-6 text-white py-2 rounded"><Link href="/brand-and-organizations">start</Link></button>
           
          </div>
          </div>
        )}
    </header>
  );
}
