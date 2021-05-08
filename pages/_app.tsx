import "../styles/global.css";

import { persistor, store } from "../api/store";

import { AppProps } from "next/dist/next-server/lib/router/router";
import Navbar from "../components/navbar";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

let MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="outline-none font-sans flex flex-col w-screen h-screen text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black select-none">
          <Navbar title="MovieZone" />
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
