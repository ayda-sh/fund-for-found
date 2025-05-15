import Link from "next/link";

function Notlogged() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#959595d6]">
      <div className="bg-white px-10 py-7 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-9 text-[var(--primary)] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
        </div>
        <h2 className="text-lg mt-5 text-red-600 font-semibold">
          You are not logged in!
        </h2>
        <p className="mt-4 text-[13px] text-[var(--light)]">
          Please log in to create a brand.
        </p>
        <span className="h-[1px] bg-[var(--light-3)] w-full mt-10 mb-5"></span>
        <Link href="/login">
          <button className="text-[var(--primary)] font-semibold focus:outline-none cursor-pointer">
            Log in/Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Notlogged;
