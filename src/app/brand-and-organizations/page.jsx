"use client";
import Link from "next/link";
import { NavBar } from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function BrandAndOrganizations() {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // get categories from api
  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://fund-for-found-backend-13.onrender.com/api/categories"
      );
      setCategory(res.data.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  // get subcategories from api
  const getSubCategories = async () => {
    try {
      const res = await axios.get(
        "https://fund-for-found-backend-13.onrender.com/api/subcategories?populate=category"
      );
      setSubcategory(res.data.data);
      console.log("Subcategories:", subcategory);
    } catch (error) {
      console.error("Failed to fetch subcategories:", error);
    }
  };

  useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  const filterSubcategory = subcategory.filter(
    (sub) => sub.category && sub.category.id == selectedCategory
  );

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
          <div className="flex justify-between md:w-[500px] w-[380px]">
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
                className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
              >
                Brand/organization name{" "}
                <span className="text-[#C91433]">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                required
                data-has-listeners="true"
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              />
            </div>

            <div className="mb-4 w-1/2">
              <label
                htmlFor="country"
                className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
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
                className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
              >
                Category <span className="text-[#C91433]">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory("");
                }}
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              >
                <option value="" className="text-sm">
                  Select category
                </option>
                {category.map((cat) => (
                  <option className="text-sm" key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4 w-1/2">
              <label
                htmlFor="subcategory"
                className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
              >
                Subcategory <span className="text-[#C91433]">*</span>
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                disabled={!selectedCategory}
                required
                className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
              >
                <option value="" className="text-sm">
                  Select subcategory
                </option>
                {filterSubcategory.map((sub) => (
                  <option className="text-sm" key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="brandTags"
              className="block md:text-sm text-[12px] font-semibold text-[var(--gray-2)]"
            >
              Brand tags
              <span className="bg-[#1C2024] text-white rounded-xl py-0.5 px-[3px] text-[10px] ml-1">
                ?
              </span>
            </label>
            <div className="mt-1" ref={wrapperRef}>
              <div className="flex flex-wrap items-center gap-2 p-1 border border-[var(--primary-300)] rounded-md">
                <input
                  type="text"
                  data-has-listeners="true"
                  className="flex-1 min-w-[100px] p-1 outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mr-2 leading-tight"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              data-has-listeners="true"
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
            disabled={!isChecked}
            className={`px-6 md:w-40 w-full py-2 bg-[var(--primary)] text-white font-bold rounded ${
              isChecked ? "bg-[var(--primary)]" : "bg-[var(--primary-100)]"
            }`}
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
