import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { setAuthenticationToken } from "../../api/slices/authentication-slice";
import { setInfo } from "../../api/slices/user-slice";
import { useDispatch } from "react-redux";

let RegisterPage: React.FC = () => {
  let dispatch = useDispatch();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  let register = async () => {
    let payload = {
      username: "",
      firstName: "",
      lastName: "",
      email,
      password,
    };

    let response = await axios.post("/api/authentication/register", payload);

    dispatch(setInfo(response.data.data));
    dispatch(setAuthenticationToken(response.data.authenticationToken));
  };

  return (
    <>
      <Head>
        <title>MovieZone | Register.</title>
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border-l border-t border-r border-b border-gray-300 dark:border-gray-800 rounded-md p-4">
          <div className="flex flex-col items-center">
            <div className="text-xl">Create An Account.</div>

            <div className="flex flex-col items-center w-72 mt-5 mb-3">
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="email"
                placeholder="Your email"
                onChange={({ target: { value } }) => setEmail(value)}
              />
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="password"
                placeholder="Your password"
                onChange={({ target: { value } }) => setPassword(value)}
              />
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="password"
                placeholder="Confirm password"
                onChange={({ target: { value } }) => setConfirmPassword(value)}
              />
            </div>

            <div
              className="flex flex-row flex-auto border-l border-t border-r border-b border-blue-900 px-3 py-2 hover:border-0 hover:bg-blue-900 rounded-md cursor-pointer mb-3"
              onClick={() => password === confirmPassword && register()}
            >
              Continue
            </div>
            <div className="text-xs text-gray-700">
              Already have an account?{" "}
              <span className="text-black dark:text-white cursor-pointer hover:text-blue-900">
                <Link href="/authentication/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
