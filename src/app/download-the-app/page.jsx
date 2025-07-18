import "@/public/scss/contacts.scss";
import AppHero from "@/src/components/clarity-solutions-app/AppHero";
import AppAssistance from "@/src/components/clarity-solutions-app/AppAssistance";
import DontHaveCard from "@/src/components/clarity-solutions-app/DontHaveCard";

import "@/public/scss/clarity-solutions-app.scss";


export const metadata = {
  title: "Download the App | Clarity Solutions",
  description: "",
  openGraph: {
    title: "Download the App | Clarity Solutions",
    description: "",
    images: "https://clarity-solutions.io/images/meta.jpg",
  },
};

export default function ClaritySolutionsApp() {
  return (
    <>
     <AppHero />
     <DontHaveCard />
     <AppAssistance />
    </>
  );
}
