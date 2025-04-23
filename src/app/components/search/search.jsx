function Search() {
  return (
    <>
      <div className="relative border border-[#E7E7E7] rounded-md focus:outline-none">
      <input
        data-has-listeners="true"
        className="w-full md:w-50 h-10 py-3.5 pl-7 placeholder-[#959595] placeholder-custom focus:outline-none"
        type="text"
        placeholder="Search brand..."
      />
      <div className="absolute left-2 top-2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-[#959595] w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      </div>
    </>
  );
}

export default Search;
