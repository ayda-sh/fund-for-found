import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

function SignUp() {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <Link href="/">
            <img
              className="absolute top-7 left-32 hidden md:block"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </Link>
          <div className="md:w-xl w-full p-8 space-y-6">
            <h2 className="md:text-[32px] text-xl font-medium text-center text-[var(--gray-2)]">
              Create your personal account
            </h2>
            <h1 className="text-center md:text-[44px] text-3xl text-[var(--primary)] font-medium md:mt-16 mt-7 md:mb-14 mb-4">
              FUND FOR FOUND
            </h1>

            <div className="flex justify-center mb-10">
              <Image src="/images/logo.svg" width={80} height={80} alt="logo" />
            </div>

            <form className="flex justify-center gap-3 items-center w-full h-10 bg-[var(--light-4)] border border-[var(--light-2)] text-[var(--gray-4)] py-2 rounded-md hover:bg-gray-300 focus:outline-none ">
              <img src="/images/google.png" alt="google" />
              <button className="text-sm">Continue with Google</button>
            </form>

            <div className="flex items-center gap-1.5">
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
              <p className="text-[var(--light-1)]">or</p>
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2D2D2D]">
                  First name
                </label>
                <input
                  data-has-listeners="true"
                  type="text"
                  className="mt-1 block w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2D2D2D]">
                  Last name
                </label>
                <input
                  data-has-listeners="true"
                  type="text"
                  className="mt-1 block w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#2D2D2D]">
                  Email address
                </label>
                <input
                  data-has-listeners="true"
                  type="email"
                  placeholder="e.g.yourname@yahoo.com"
                  className="mt-1 block w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm placeholder:text-[var(--light-2)] placeholder-custom px-4"
                  required
                />
                <p className="text-xs text-[var(--primary)] mt-1">
                  We will send you a 6 digit code to your email.
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--primary)] text-white py-3.5 rounded-md focus:outline-none mt-6"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </main>
      <div className="flex justify-center text-center mt-14 mb-3.5">
        <p className="text-[var(--light-1)] text-sm">
          This site is proected by reCAPTCHA and the Google
          <Link className="text-[var(--primary)] mx-1" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link className="text-[var(--primary)] mx-1" href="/term-of-use">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>
    </>
  );
}

export default SignUp;
