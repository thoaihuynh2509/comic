import "../../styles/global.scss";
import "antd/dist/antd.css";
import "swiper/css/bundle";


import type { AppProps } from "next/app";
import ChapterProvider from "../providers/ChapterProvider";
import SelectedObjectProvider from "../providers/SelectedObjectProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChapterProvider>
      <SelectedObjectProvider>
        <Component {...pageProps} />
      </SelectedObjectProvider>
    </ChapterProvider>
  );
}

export default MyApp;
