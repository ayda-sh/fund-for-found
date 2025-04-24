"use client";
import Link from "next/link";
import { NavBar } from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function BrandAndOrganizations() {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);

  const allItems = ["Product design", "Web design", "Software", "UI design"];

  const filteredItems = allItems.filter(
    (item) =>
      !selectedItems.includes(item) &&
      item.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setInputValue("");
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex items-center py-10 shadow-md relative">
        <Link href="/">
          <Image
            width={40}
            height={40}
            className="absolute top-9 left-32 hidden md:block"
            src="/images/arrow-left.svg"
            alt="arrow-left"
          />
        </Link>
        <div className="flex justify-center text-center mx-auto">
          <div className="flex justify-between md:w-[500px] w-[400px]">
            <span className="before:content-[''] before:bg-[var(--light-4)] before:h-1 md:before:w-100 before:w-80  before:absolute before:top-[50%] before:-z-1 before:left-[50%] before:transform before:-translate-x-1/2 before:-translate-y-1/2"></span>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--primary)] rounded-full text-white mx-auto flex items-center justify-center">
                1
              </span>
            </div>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--light-4)] rounded-full text-[var(--light-1)] mx-auto flex items-center justify-center">
                2
              </span>
            </div>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--light-4)] rounded-full text-[var(--light-1)] mx-auto flex items-center justify-center">
                3
              </span>
            </div>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--light-4)] rounded-full text-[var(--light-1)] mx-auto flex items-center justify-center">
                4
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-6 my-10">
        <h2 className="text-2xl text-[var(--primary)] font-bold mb-4">
          Basic Info
        </h2>
        <p className="mb-5 text-[var(--gray-3)] text-xl font-semibold">
          Tell about your Brand/organization
        </p>
        <p className="text-[var(--gray-3)] mb-3">
          Provide an overview of the brand or organization you want to register
          on 3F.
        </p>
        <form>
          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label
                htmlFor="brandName"
                className="block text-sm font-semibold text-[var(--gray-2)]"
              >
                Brand/organization name{" "}
                <span className="text-[#C91433]">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              />
            </div>

            <div className="mb-4 w-1/2">
              <label
                htmlFor="country"
                className="block text-sm font-semibold text-[var(--gray-2)]"
              >
                Country <span className="text-[#C91433]">*</span>
              </label>
              <select
                id="country"
                name="country"
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              >
                <option value="">Select a country</option>
              </select>
            </div>
          </div>

          <p className="text-[var(--gray-3)] mb-3">
            Select the primary category that best describes your brand or
            organization. then select the subcategory that further defines your
            brand or organization.
          </p>

          <div className="flex gap-5">
            <div className="mb-4 w-1/2">
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-[var(--gray-2)]"
              >
                Category <span className="text-[#C91433]">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              >
                <option value="">Select category</option>
              </select>
            </div>

            <div className="mb-4 w-1/2">
              <label
                htmlFor="subcategory"
                className="block text-sm font-semibold text-[var(--gray-2)]"
              >
                Subcategory <span className="text-[#C91433]">*</span>
              </label>
              <select
                id="subcategory"
                name="subcategory"
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              >
                <option value="">Select subcategory</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="brandTags"
              className="block text-sm font-semibold text-[var(--gray-2)]"
            >
              Brand tags
              <span className="bg-[#1C2024] text-white rounded-xl py-0.5 px-[3px] text-[10px] ml-1">
                ?
              </span>
            </label>
            <div className="mt-1" ref={wrapperRef}>
              <div className="flex flex-wrap items-center gap-2 p-1 border border-[var(--primary-300)] rounded-md">
                {selectedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center bg-[var(--light-3)] text-[var(--gray-4)] px-3 py-1 rounded text-sm"
                  >
                    {item}
                  </div>
                ))}

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                  className="flex-1 min-w-[100px] p-1 outline-none bg-transparent"
                />
              </div>

              {isDropdownOpen && filteredItems.length > 0 && (
                <div className="mt-1 w-full border border-[var(--light-3)] rounded-md shadow-lg max-h-60 overflow-auto">
                  {filteredItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => addItem(item)}
                      className="p-2 hover:bg-[var(--primary-50)] text-[var(--gray-4)] text-sm cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mr-2 leading-tight"
            />
            <label htmlFor="terms" className="text-sm text-[var(--gray-3)]">
              I agree with the
              <Link href="#" className="mx-1 underline text-[var(--primary)]">
                terms of service
              </Link>
              of 3F.
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-[var(--primary)] text-white font-bold rounded"
          >
            Continue
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BrandAndOrganizations;
