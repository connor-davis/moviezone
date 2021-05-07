import Account from "./dropdowns/account";
import Debug from "./dropdowns/debug";
import React from "react";

let Navbar: React.FC = () => {
  return (
    <div className="flex w-screen px-2 py-3 justify-between items-center border-b border-gray-300 dark:border-gray-800">
      <div className="font-semibold text-lg">Project Aurora</div>
      <div className="flex space-x-2"></div>
    </div>
  );
};

export default Navbar;
