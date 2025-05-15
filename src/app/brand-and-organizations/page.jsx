"use client";
import Link from "next/link";
import { NavBar } from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import countries from "@/data/countries.json";
import Categoriesdata from "../components/categoriesdata/categoriesdata";
import Notlogged from "../components/modal/notlogged/notlogged";

function BrandAndOrganizations() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [tags, setTags] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notLogged, setNotLogged] = useState(false);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    if (countries) {
      setLoading(false);
    }
  }, []);

  const handleAddTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e) => {
    const jwt = localStorage.getItem("token");

    if (!jwt) {
      setNotLogged(!notLogged);
      return;
    }
    e.preventDefault();

    const body = {
      data: {
        name: brandName,
        country: { name: selectedCountry },
        category: { category: selectedCategory },
        subcategory: { subcategory: selectedSubcategory },
        tags: tags,
      },
    };

    try {
      const res = await axios.post("https://fund-for-found-backend-13.onrender.com/api/brands", body);
      if (res.status === 201) {
        alert("Brand created successfully!");
      }
    } catch (error) {
      console.log("Error creating brand:", error.response?.data);
    }
  };

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
        <form onSubmit={handleSubmit}>
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
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
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

              {loading ? (
                <p>Loading...</p>
              ) : (
                <select
                  onChange={handleChange}
                  value={selectedCountry}
                  className="mt-1 block w-full border border-[var(--primary-300)] rounded-md p-2"
                >
                  <option value="">Select a country</option>
                  {countries.countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <p className="text-[var(--gray-3)] mb-3">
            Select the primary category that best describes your brand or
            organization. then select the subcategory that further defines your
            brand or organization.
          </p>

          <div className="">
            <Categoriesdata
              onCategoryChange={(name) => setSelectedCategory(name)}
              onSubcategoryChange={(name) => setSelectedSubcategory(name)}
            />
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
            <div className="mt-1">
              <div className="flex flex-wrap items-center gap-2 p-1 border border-[var(--primary-300)] rounded-md">
                <input
                  type="text"
                  data-has-listeners="true"
                  onKeyDown={handleAddTag}
                  className="flex-1 min-w-[100px] p-1 outline-none bg-transparent"
                />
              </div>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    margin: "5px",
                    padding: "5px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                >
                  {tag}
                </span>
              ))}
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
            onClick={handleSubmit}
            disabled={!isChecked}
            className={`px-6 md:w-40 w-full py-2 bg-[var(--primary)] text-white font-bold rounded ${
              isChecked ? "bg-[var(--primary)]" : "bg-[var(--primary-100)]"
            }`}
          >
            Continue
          </button>
        </form>
        {notLogged && <Notlogged />}
      </div>
      <Footer />
    </>
  );
}

export default BrandAndOrganizations;
