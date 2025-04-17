import Image from "next/image";
import Link from "next/link";

function SignupCode() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#959595d6]">
      <div className="bg-white px-10 py-7 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center">
          <Image src="/images/check.png" width={60} height={60} alt="check" />
        </div>
        <h2 className="text-lg mt-12 text-[var(--gray-2)] font-semibold">
          Login code text message sent
        </h2>
        <p className="mt-4 text-[13px] text-[var(--light-1)]">
          we've sent a 6 digit code to{" "}
          <span className="text-[var(--gray-1)]">09120000000</span>
        </p>
        <span className="h-[1px] bg-[var(--light-3)] w-full mt-10 mb-5"></span>
        <Link href="/sign-up/phone-number/confirm-phone-number">
          <button className="text-[var(--primary)] font-semibold focus:outline-none">
            ok, continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignupCode;
