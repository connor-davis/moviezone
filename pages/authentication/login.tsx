import Head from "next/head";
import Link from "next/link";
import React from "react";

let LoginPage = () => {
  return (
    <>
      <Head>
        <title>MovieZone | Login.</title>
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border-l border-t border-r border-b border-gray-300 dark:border-gray-800 rounded-md p-4">
          <div className="flex flex-col items-center">
            <div className="text-xl">Authenticate.</div>

            <div className="flex flex-col items-center w-72 mt-5 mb-3">
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="email"
                placeholder="Your email"
              />
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="password"
                placeholder="Your password"
              />
            </div>

            <div className="flex flex-row flex-auto border-l border-t border-r border-b border-blue-900 px-3 py-2 hover:border-0 hover:bg-blue-900 rounded-md cursor-pointer mb-3">
              Continue
            </div>
            <div className="text-xs text-gray-700">
              Don't have an account?{" "}
              <span className="text-black dark:text-white cursor-pointer hover:text-blue-900">
                <Link href="/authentication/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
