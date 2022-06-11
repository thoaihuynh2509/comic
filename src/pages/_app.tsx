import "../../styles/global.scss";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import ChapterProvider from "../providers/ChapterProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChapterProvider>
      <Component {...pageProps} />
    </ChapterProvider>
  );
}

export default MyApp;
