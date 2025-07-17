import { Montserrat } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Preloader from "../components/Preloader";
import { GoogleAnalytics } from "@next/third-parties/google";
import DeviceRedirect from "../components/DeviceRedirect";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DeviceRedirect />
      </body>
    </html>
  );
}
