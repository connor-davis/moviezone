import Link from "next/link";
import { Menu } from "@headlessui/react";
import React from "react";
import { getInfo } from "../../api/slices/user-slice";
import { useSelector } from "react-redux";

let Account: React.FC = () => {
  let info = useSelector(getInfo);

  let LoginIcon: React.FC = () => {
    return (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
    );
  };

  let RegisterIcon: React.FC = () => {
    return (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
    );
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex justify-center items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-gray-300 relative dark:hover:bg-gray-800 transition duration-500 ease-in-out focus:outline-none">
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>Account</div>
      </Menu.Button>

      <Menu.Items className="flex flex-col w-48 absolute z-10 top-11 right-0 p-2 bg-gray-100 dark:bg-black border-l border-t border-r border-b border-gray-300 dark:border-gray-800">
        {info.userId ? (
          <>
            <Menu.Item>
              <Link href="/api">
                <div className="flex flex-auto space-x-2 text-gray-800 dark:text-gray-100 hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer">
                  <div>Profile</div>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/api">
                <a className="hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer">
                  Settings
                </a>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/api">
                <a className="hover:bg-red-200 hover:text-red-500 p-2 cursor-pointer">
                  Logout
                </a>
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <Link href="/authentication/login">
                <div className="flex flex-auto items-center space-x-2 text-gray-800 dark:text-gray-100 hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer">
                  <LoginIcon />
                  <div>Login</div>
                </div>
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link href="/authentication/register">
                <div className="flex flex-auto items-center space-x-2 text-gray-800 dark:text-gray-100 hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer">
                  <RegisterIcon />
                  <div>Register</div>
                </div>
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu.Items>
    </Menu>
  );
};

export default Account;
