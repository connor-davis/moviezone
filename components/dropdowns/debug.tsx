import { setInfo, testPost } from "../../api/slices/user-slice";

import { Menu } from "@headlessui/react";
import React from "react";
import { useDispatch } from "react-redux";

let Debug: React.FC = () => {
  let dispatch = useDispatch();

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
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <div>Debug</div>
      </Menu.Button>

      <Menu.Items className="flex flex-col w-48 absolute z-10 top-11 right-0 p-2 bg-gray-100 dark:bg-black border-l border-t border-r border-b border-gray-300 dark:border-gray-800">
        <Menu.Item>
          <div
            className="flex flex-auto items-center space-x-2 text-gray-800 dark:text-gray-100 hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer"
            onClick={() => dispatch(setInfo({ name: Math.random() }))}
          >
            <div>Trigger</div>
          </div>
        </Menu.Item>

        <Menu.Item>
          <div
            className="flex flex-auto items-center space-x-2 text-gray-800 dark:text-gray-100 hover:bg-blue-200 hover:text-blue-500 p-2 cursor-pointer"
            onClick={() => testPost()}
          >
            <div>Trigger Test</div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Debug;
