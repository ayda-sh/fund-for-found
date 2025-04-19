import Image from "next/image";
import Link from "next/link";

function Welcome() {
  return (
    <main>
      <div className="mx-auto flex flex-col items-center justify-center relative">
        <div className="md:w-xl w-full p-8 space-y-6">
          <h1 className="text-center font-semibold md:text-[44px] text-3xl text-[var(--primary)] md:mt-16 mt-7 md:mb-5 mb-4">
            Welcome to 3F
          </h1>

          <div className="flex justify-center">
            <Image
              src="/images/welcome.png"
              width={300}
              height={300}
              alt="welcome"
            />
          </div>

          <div className="flex flex-col justify-center items-center p-8">
            <p className="text-[var(--gray-4)] font-medium md:text-2xl text-xl mb-6 text-center">
              Your journey begins here. <br />
              Ready to start?
            </p>

            <div className="flex gap-5 w-80 justify-center items-center mt-5">
              <Link
                href="/"
                className="w-full bg-[var(--primary)] text-white py-3 rounded-md focus:outline-none text-sm text-center"
              >
                Go homepage
              </Link>
              <Link
                href="#"
                className="w-full bg-[var(--primary)] text-white py-3 rounded-md focus:outline-none text-sm text-center"
              >
                Start project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
