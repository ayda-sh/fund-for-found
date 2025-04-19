import { NavBar } from "@/app/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

function ResetLink() {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col items-center justify-center">
          <div className="md:w-xl w-full p-8 space-y-6">
            <div className="flex justify-center mt-4">
              <Image
                src="/images/reset-link.svg"
                width={200}
                height={200}
                alt="reset-link"
              />
            </div>

            <h1 className="text-center font-semibold md:text-3xl text-2xl text-[var(--primary)] md:mt-16 mt-7">
              Your link is being sent. Hang tight!
            </h1>

            <div className="flex flex-col justify-center items-center my-4">
              <p className="text-[var(--light-1)] font-medium md:text-[18px] text-sm text-center">
                we've sent the link to
                <span className="text-[var(--gray-1)]"> example@gmail.com</span>
              </p>

              <div className="flex flex-col justify-center items-center text-center mt-5">
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="w-full text-[var(--primary)] py-3 rounded-md focus:outline-none text-xl text-center"
                >
                  Go to your mail
                </Link>

                <p className="text-[var(--light-1)] mt-10 text-sm">You will be redirected from the link in the email, you can safetly close the tab.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetLink;
