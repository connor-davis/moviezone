import React, { useEffect, useState } from "react";
import { getInfo, setInfo } from "../api/slices/user-slice";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { getAuthenticationToken } from "../api/slices/authentication-slice";

let CreateProfilePage: React.FC = () => {
  let dispatch = useDispatch();

  let authenticationToken = useSelector(getAuthenticationToken);
  let info = useSelector(getInfo);

  let [username, setUsername] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!authenticationToken) Router.push("/authentication/login");
    if (info.userUsername && info.userFirstName && info.userLastName)
      Router.push("/");
  }, [authenticationToken, info]);

  let complete = async () => {
    let payload = {
      userUsername: username,
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: info.userEmail,
    };

    let response = await axios.post("/api/users/update", payload, {
      headers: {
        Authorization: "Bearer " + authenticationToken,
      },
    });

    let { data } = response.data;

    dispatch(
      setInfo({
        userId: data.userId,
        userUsername: data.userUsername,
        userFirstName: data.userFirstName,
        userLastName: data.userLastName,
        userEmail: data.userEmail,
      })
    );
  };

  return (
    <>
      <Head>
        <title>MovieZone | Complete Profile.</title>
      </Head>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="border-l border-t border-r border-b border-gray-300 dark:border-gray-800 rounded-md p-4">
          <div className="flex flex-col items-center">
            <div className="text-xl">Complete Profile</div>

            <div className="flex flex-col items-center w-72 mt-5 mb-3">
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="text"
                placeholder="Your username, e.g. bob"
                onChange={({ target: { value } }) => setUsername(value)}
              />
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="text"
                placeholder="Your first name"
                onChange={({ target: { value } }) => setFirstName(value)}
              />
              <input
                className="flex flex-row flex-auto w-full justify-center items-center px-3 py-2 bg-gray-300 dark:bg-gray-800 my-1 outline-none rounded-md "
                type="text"
                placeholder="Your last name"
                onChange={({ target: { value } }) => setLastName(value)}
              />
            </div>

            <div
              className="flex flex-row flex-auto border-l border-t border-r border-b border-blue-900 px-3 py-2 hover:border-0 hover:bg-blue-900 rounded-md cursor-pointer mb-3"
              onClick={() =>
                username !== "" &&
                firstName !== "" &&
                lastName !== "" &&
                complete()
              }
            >
              Complete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfilePage;
