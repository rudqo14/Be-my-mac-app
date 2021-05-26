import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const AppLayout = ({ children }: AppLayout) => {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
        <Link href="/">
          <a className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
            Home
          </a>
        </Link>
      </div>
      <div className="sm:mb-0 self-center">
        <Link href="/profile">
          <a className="">프로필</a>
        </Link>
        <Link href="/signup">
          <a className="">회원가입</a>
        </Link>
      </div>
      {children}
    </nav>
  );
};

interface AppLayout {
  children: React.ReactNode;
}

export default AppLayout;
