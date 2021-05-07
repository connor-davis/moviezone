import "../styles/global.css";

import { AppProps } from "next/dist/next-server/lib/router/router";

let MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="outline-none font-sans flex flex-col w-screen h-screen text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-black select-none">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
