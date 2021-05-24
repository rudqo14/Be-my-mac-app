import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const AppLayout = ({ children }: AppLayout) => {
  return (
    <nav>
      <div className="flex space-x-2">
        <Link href="/">
          <a className="block px-4 py-2 rounded-md">Home</a>
        </Link>
        <Link href="/profile">
          <a className="block px-4 py-2 rounded-md">프로필</a>
        </Link>
        <Link href="/signup">
          <a className="block px-4 py-2 rounded-md">회원가입</a>
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
