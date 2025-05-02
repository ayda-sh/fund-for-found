"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const schema = yup.object({
    identifier: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8)
      .max(16)
      .matches(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitLoginForm = async (user) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://fund-for-found-backend-13.onrender.com/api/auth/local",
        user
      );
      console.log("User logged in:", response.data);
      localStorage.setItem("token", response.data.jwt);
      router.push("/");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <NavBar />

      <main>
        <div className="mx-auto flex flex-col items-center justify-center relative">
          <div className="md:w-xl w-full p-8 space-y-5">
            <h1 className="text-center md:text-[44px] text-3xl text-[var(--primary)] font-medium mt-7">
              FUND FOR FOUND
            </h1>
            <h2 className="md:text-xl text-xl font-medium text-center text-[var(--gray-2)]">
              Create an account or sign in to start creating
            </h2>

            <div className="flex justify-center mb-10">
              <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
            </div>

            <form className="flex justify-center gap-3 items-center w-full h-10 bg-[var(--light-4)] border border-[var(--light-2)] text-[var(--gray-4)] py-2 rounded-md hover:bg-gray-300 focus:outline-none ">
              <Image
                src="/images/google.png"
                alt="google"
                width={18}
                height={18}
              />
              <button className="text-sm">Continue with Google</button>
            </form>

            <div className="flex items-center gap-1.5">
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
              <p className="text-[var(--light-1)]">or</p>
              <div className="grow h-[1px] bg-[var(--light-3)]"></div>
            </div>

            <form onSubmit={handleSubmit(submitLoginForm)}>
              <div className="">
                <label className="block text-sm font-medium text-[var(--gray-2)]">
                  Email address
                </label>
                <input
                  {...register("identifier")}
                  data-has-listeners="true"
                  type="email"
                  placeholder="e.g. yourname@yahoo.com"
                  className="mt-1 block w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm px-3 focus:outline-none placeholder:text-[var(--light-2)] placeholder-custom"
                  required
                />
              </div>
              {errors?.identifier ? (
                <span className="text-[var(--error)] text-sm">
                  {errors.identifier.message}
                </span>
              ) : null}
              <div className="my-4 flex flex-col">
                <label className="block text-sm font-medium text-[var(--gray-2)]">
                  Password
                </label>

                <div className="flex justify-between items-center mt-1 w-full h-10 border border-[var(--primary-300)] rounded-md shadow-sm px-3">
                  <input
                    {...register("password")}
                    data-has-listeners="true"
                    type={showPassword ? "text" : "password"}
                    className="block w-full h-10 focus:outline-none"
                    required
                  />

                  <button onClick={toggleShowPassword}>
                    {showPassword ? (
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
                {errors?.password ? (
                  <span className="text-[var(--error)] text-sm">
                    {errors.password.message}
                  </span>
                ) : null}
                <Link
                  href="/forget-password"
                  className="text-sm text-[var(--primary)] mt-1"
                >
                  Forget your password?
                </Link>
              </div>

              {error && (
                <p className="text-[var(--error)] bg-[#fe555521] border border-[#c9143373] text-sm rounded p-1">
                  {error.data?.message || "Incorrect email or password"}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-[var(--primary)] text-white py-3.5 rounded-md focus:outline-none mt-6"
              >
                {isLoading ? (
                   <span className="flex justify-center items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  </span>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
            <div className="flex flex-col justify-center text-center gap-2">
              <p>Don't have one?</p>
              <Link className="text-[var(--primary)]" href="/sign-up">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center text-center mt-14 mb-3.5">
        <p className="text-[var(--light-1)] text-sm">
          This site is proected by reCAPTCHA and the Google
          <Link className="text-[var(--primary)] mx-1" href="#">
            Privacy Policy
          </Link>
          and
          <Link className="text-[var(--primary)] mx-1" href="#">
            Terms of Service
          </Link>
          apply.
        </p>
      </div>
    </>
  );
}

export default LoginForm;
