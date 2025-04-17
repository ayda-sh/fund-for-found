import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

function ConfirmEmail() {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <Link href="/sign-up">
            <img
              className="absolute top-7 left-32 hidden md:block"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </Link>
          <div className="md:w-xl w-full p-8 space-y-6">
            <h2 className="md:text-[32px] text-xl font-medium text-center text-[var(--gray-2)]">
              Confirm your email
            </h2>
            <h1 className="text-center md:text-[44px] text-3xl text-[var(--primary)] font-medium md:mt-16 mt-7 md:mb-5 mb-4">
              FUND FOR FOUND
            </h1>

            <div className="flex justify-center mb-10">
              <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
            </div>

            <div className="flex flex-col justify-center items-center p-8">
              <h2 className="text-3xl font-medium text-[var(--primary)]">
                Enter confirmation code
              </h2>
              <p className="text-[var(--light-1)] text-sm mb-6 mt-3 text-center">
                Enter the 6-digit login code we sent to yourname@yahoo.com
              </p>
              <div className="flex space-x-2 mb-4">
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
                <input
                data-has-listeners="true"
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-[var(--light-2)] rounded-lg focus:outline-none"
                />
              </div>
              <button className="w-full bg-[var(--primary)] text-white py-3.5 rounded-md focus:outline-none mt-6">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ConfirmEmail;
