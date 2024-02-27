import { Montserrat } from "next/font/google";
import '@/public/scss/base.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Clarity Solutions",
    template: "%s | Clarity Solutions",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
