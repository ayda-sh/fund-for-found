"use client";

import SignupCode from "@/app/components/modal/signupcode/signupcode";
import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function PhoneNumber() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <Link href="/sign-up/confirm-email">
            <img
              className="absolute top-7 left-32 hidden md:block"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </Link>
          <div className="md:w-xl w-full p-8 space-y-6">
            <h2 className="md:text-[32px] text-xl font-medium text-center text-[var(--gray-2)]">
              Enter your phone number
            </h2>
            <h1 className="text-center md:text-[44px] text-3xl text-[var(--primary)] font-medium md:mt-16 mt-7 md:mb-5 mb-4">
              FUND FOR FOUND
            </h1>

            <div className="flex justify-center mb-10">
              <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
            </div>

            <div className="flex flex-col justify-center p-8 w-full">
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-[var(--gray-1)]">
                    Mobile number
                  </label>
                  <input
                    data-has-listeners="true"
                    type="tel"
                    placeholder="e.g. 091200000"
                    className="mt-1 block w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm placeholder:text-[var(--light-2)] placeholder-custom px-4"
                    required
                  />
                  <p className="text-xs text-[var(--primary)] mt-1">
                    We will send you 6 digit code to your mobile number.
                  </p>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-3.5 rounded-md focus:outline-none mt-6"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
        {modalOpen && <SignupCode />}
      </main>
    </>
  );
}

export default PhoneNumber;
