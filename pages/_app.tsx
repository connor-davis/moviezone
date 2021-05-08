import "../styles/global.css";

import { Provider, useSelector } from "react-redux";
import { persistor, store } from "../api/store";

import Navbar from "../components/navbar";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import { getAuthenticationToken } from "../api/slices/authentication-slice";
import { getInfo } from "../api/slices/user-slice";
import { useEffect } from "react";

let ProfileChecker: React.FC = () => {
  let authenticationToken = useSelector(getAuthenticationToken);
  let info = useSelector(getInfo);

  useEffect(() => {
    if (authenticationToken && !info.userUsername)
      Router.push("/complete-profile");
  }, [authenticationToken, info]);

  return <></>;
};

let App = (props) => {
  let { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="outline-none font-sans flex flex-col w-screen h-screen text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black select-none">
          <Navbar title="MovieZone" />
          <Component {...pageProps} />

          <ProfileChecker />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
