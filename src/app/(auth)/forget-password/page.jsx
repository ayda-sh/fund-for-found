"use client";
import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailEntered(true);
    } else {
      setEmailEntered(false);
    }
  };
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <div className="md:w-xl w-full p-8 space-y-5">
            <div className="flex justify-center mb-10">
              <Image src="/images/lock.svg" width={70} height={70} alt="lock" />
            </div>
            <h1 className="text-center md:text-4xl text-3xl text-[var(--primary)] font-medium mt-7">
              Trouble with logging in?
            </h1>
            <h2 className="md:text-[16px] font-medium text-center text-[var(--gray-2)]">
              Enter your email address and we'll send you a link to get back
              into your account.
            </h2>

            <form>
              <div className="mb-4 mt-12">
                <label className="block text-sm font-medium text-[var(--gray-2)]">
                  Email address
                </label>

                <input
                  data-has-listeners="true"
                  type="email"
                  placeholder="e.g. yourname@yahoo.com"
                  className="block mt-1 border border-[var(--primary-300)] rounded-md shadow-sm px-3 w-full h-10 focus:outline-none placeholder:text-[var(--light-2)] placeholder-custom"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3.5 rounded-md focus:outline-none mt-6 text-white ${
                  emailEntered
                    ? "bg-[var(--primary)]"
                    : "bg-[var(--primary-100)]"
                } `}
              >
                Continue
              </button>
            </form>
            <div className="flex items-center gap-1.5">
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
              <p className="text-[var(--light-1)]">or</p>
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
            </div>
            <div className="flex flex-col justify-center text-center gap-2 mt-4">
              <Link className="text-[var(--primary)]" href="/sign-up">
                Create an account
              </Link>
              <Link className="text-sm font-medium " href="/login">
                back to login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ForgetPassword;
