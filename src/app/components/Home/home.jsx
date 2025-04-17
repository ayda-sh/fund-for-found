import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="container mx-auto md:py-24 py-16">
      <div className="flex flex-col justify-center text-center max-w-5xl mx-auto gap-8 px-6">
        <h1 className="text-[var(--secondary)] md:text-4xl text-3xl font-semibold text-left md:text-center">
          Create your profile and take the first step towards new opportunities
        </h1>
        <p className="text-[var(--light-1)] md:text-center text-base font-light text-left">
          By creating your account, you'll gain access to a thriving community
          where brands and individuals are committed to offering you ongoing
          support. This support network will empower you with the resources,
          guidance, and connections you need to succeed, ensuring that you're
          never alone on your journey
        </p>
        <div className="flex flex-col justify-center items-center mx-auto w-80 border border-[var(--primary)] rounded-2xl px-8 py-8">
          <Image
            src="/images/Brand-or-Organization.svg"
            width={88}
            height={88}
            alt="Brand or Organization"
          />

          <h2 className="mt-8 text-[var(--primary)] text-2xl font-semibold">
            Brand or Organization
          </h2>
          <div className="text-left">
            <p className="text-[var(--light-1)]  mt-4 mb-16">
              If your brand is established and you're looking for continuous
              support, get started now.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/sign-up">
              <button className="bg-[var(--primary)] w-65 h-10 rounded-sm text-[var(--color-white)]">
                Start
              </button>
            </Link>
            <Link className="text-[var(--primary-300)]" href="/about">
              learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
