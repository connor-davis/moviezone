import React, { ComponentProps } from "react";

import Account from "./dropdowns/account";
import Link from "next/link";

interface INavbarProps {
  title: string;
}

let Navbar = ({ title }: INavbarProps) => {
  return (
    <div className="flex w-screen px-2 py-3 justify-between items-center border-b border-gray-300 dark:border-gray-800">
      <div className="font-semibold text-lg">
        <Link href="/">{title}</Link>
      </div>
      <div className="flex space-x-2">
        <Account />
      </div>
    </div>
  );
};

export default Navbar;
