import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

function DetailedInfo() {
  return (
    <div>
      <NavBar />
      <div className="flex items-center py-10 shadow-md relative">
        <Link href="/brand-and-organizations">
          <Image
            width={40}
            height={40}
            className="absolute top-9 left-32 hidden md:block"
            src="/images/arrow-left.svg"
            alt="arrow-left"
          />
        </Link>
        <div className="flex justify-center text-center mx-auto">
          <div className="flex justify-between md:w-[500px] w-[380px] relative">
            <span className="before:content-[''] before:bg-[var(--light-4)] before:h-1 md:before:w-100 before:w-80  before:absolute before:top-[50%] before:-z-1 before:left-[50%] before:transform before:-translate-x-1/2 before:-translate-y-1/2"></span>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--primary)] rounded-full text-white mx-auto flex items-center justify-center">
                1
              </span>
            </div>
            <span className="before:content-[''] before:bg-[var(--primary)] before:h-1 md:before:w-30 before:w-20  before:absolute before:top-[50%] before:-z-1 md:before:left-[25%] before:transform before:-translate-x-1/2 before:-translate-y-1/2"></span>
            <div className="w-1/2">
              <span className="h-8 w-8 bg-[var(--primary)] rounded-full text-white mx-auto flex items-center justify-center">
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
          Detailed Info
        </h2>{" "}
        <p className="mb-5 text-[var(--gray-3)] md:text-2xl text-xl ">
          What is the primary missing or objective of your Brand/organizations?
        </p>
        <p className="text-[var(--gray-3)] mb-3">
          Be more specific about it, as it will be published as your deck on the
          3F(150-300 characters).
        </p>
        <form action="">
          <div className="w-full border border-[var(--primary-300)] rounded-md p-3">
            <textarea
              name=""
              id=""
              className="w-full focus:outline-none h-full min-h-[200px]"
            ></textarea>
            <div className="flex justify-end gap-2">
              <button className="border border-[var(--light-2)] rounded-md py-2 px-9 cursor-pointer">
                Edit
              </button>
              <button className="bg-[var(--primary)] rounded-md text-white py-2 px-9 cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </form>
        <h3 className="mb-5 text-[var(--gray-3)] md:text-2xl text-xl mt-12 font-semibold">
          Help your contributors find you faster (at least 3 options)
        </h3>
      </div>
    </div>
  );
}

export default DetailedInfo;
