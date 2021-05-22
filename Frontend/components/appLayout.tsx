import React from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const AppLayout = ({ children }: AppLayout) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

interface AppLayout {
  children: React.ReactNode;
}

export default AppLayout;
