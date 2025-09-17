"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import { useEffect, useState } from "react";
import Link from "next/link";
import Accordion from "./tabContent/Accordion";
import { tab1, tab2, tab3, tab4, tab5 } from "@/lib/faq";

const FaqWrap = () => {
  const [activeTab, setActiveTab] = useState("#tab1");
  const [items, setItems] = useState(tab1);

  const tab6 = [
    {
      title: "How to add card to Google Wallet",
      video: "/images/faq/3-Google_Wallet.mp4",
      cover: "/images/faq/3-Google_Wallet.png",
    },
    {
      title: "How to add card to Apple Wallet",
      video: "/images/faq/4-Apple_Wallet.MP4",
      cover: "/images/faq/4-Apple_Wallet.png",
    },
    {
      title: "How to set/change limits",
      video: "/images/faq/2-limits.mp4",
      cover: "/images/faq/2-limits.png",
    },
    {
      title: "How to order card delivery",
      video: "/images/faq/1-Physical_card.mp4",
      cover: "/images/faq/1-Physical_card.png",
    },
  ];

  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
    {
      tabId == "#tab1"
        ? setItems(tab1)
        : tabId === "#tab2"
        ? setItems(tab2)
        : tabId === "#tab3"
        ? setItems(tab3)
        : tabId === "#tab4"
        ? setItems(tab4)
        : tabId === "#tab5"
        ? setItems(tab5)
        : tabId === "#tab6"
        ? setItems(tab6)
        : setItems(tab1);
    }
  };

  useEffect(() => {}, [activeTab]);

  return (
    <>
      <section className="faq-wrap">
        <div className="_container">
          <div className="faq-wrap__body">
            <RevealList
              origin="bottom"
              interval={100}
              delay={0}
              className="tab-titles"
            >
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab1")}
                className={`${activeTab === "#tab1" ? "active" : ""}`}
              >
                Cards Guide
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab2")}
                className={`${activeTab === "#tab2" ? "active" : ""}`}
              >
                Card Usage and Services
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab3")}
                className={`${activeTab === "#tab3" ? "active" : ""}`}
              >
                Essential Info for Cardholders
              </Link>
              {/**<Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab4")}
                className={`${activeTab === "#tab4" ? "active" : ""}`}
              >
                KYC Requirements
              </Link> */}
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab5")}
                className={`${activeTab === "#tab5" ? "active" : ""}`}
              >
                Troubleshooting Card Account
              </Link>
              <Link
                href="#"
                onClick={(e) => handleTabClick(e, "#tab6")}
                className={`${activeTab === "#tab6" ? "active" : ""}`}
              >
                Video Tutorials on Card Usage
              </Link>
            </RevealList>

            <RevealWrapper className="tab-content" delay={100} origin="bottom">
              <Accordion key={activeTab} items={items} />
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
};
export default FaqWrap;
