"use client";
import { useState } from "react";
import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

function SetPassword() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setIsShowPassword(!isShowPassword);
  };

  const toggleShowPassword2 = (e) => {
    e.preventDefault();
    setIsShowPassword2(!isShowPassword2);
  };

  const isPasswordMatch = password === confirmPassword;

  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <Link className="hidden md:block" href="/sign-up/phone-number">
            <img
              className="absolute top-7 left-32"
              src="/images/arrow-left.svg"
              alt="arrow-left"
            />
          </Link>
          <div className="md:w-[500px] w-full py-15 space-y-6">
            <div className="flex justify-center">
              <Image src="/images/lock.svg" width={60} height={60} alt="lock" />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-medium text-[var(--primary)]">
                Set your password
              </h2>

              <div className="flex flex-col justify-center p-8 w-full mt-10">
                <form>
                  <div className="mb-4">
                    <label className="block text-[13px] text-[var(--gray-1)]">
                      Password
                    </label>
                    <div className="flex items-center border border-[var(--primary-300)] rounded-md shadow-sm px-4">
                      <input
                        data-has-listeners="true"
                        type={isShowPassword ? "text" : "password"}
                        className="mt-1 block w-full h-10 focus:outline-none"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button onClick={toggleShowPassword}>
                        {isShowPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-[var(--light-2)] cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-[var(--light-2)] cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <ul className="text-xs text-[var(--light-1)] mt-1 list-disc ml-4">
                      <li>
                        At least 8 characters long but 12 or more is better.
                      </li>
                      <li>
                        A combination of uppercase letters, lowercase letters,
                        numbers, and symbols.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[13px] text-[var(--gray-1)]">
                      Re enter password
                    </label>
                    <div className="flex items-center border border-[var(--primary-300)] rounded-md shadow-sm px-4">
                      <input
                        data-has-listeners="true"
                        type={isShowPassword2 ? "text" : "password"}
                        className="mt-1 block w-full h-10 focus:outline-none"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />

                      <button onClick={toggleShowPassword2}>
                        {isShowPassword2 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-[var(--light-2)] cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 text-[var(--light-2)] cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`w-full text-white py-3.5 rounded-md focus:outline-none mt-6 ${
                      isPasswordMatch
                        ? "bg-[var(--primary-100)]"
                        : "bg-[var(--primary)]"
                    }`}
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SetPassword;
