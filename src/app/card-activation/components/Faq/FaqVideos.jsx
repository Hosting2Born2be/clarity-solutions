"use client";

import { RevealWrapper } from "next-reveal";
import Image from "next/image";

import st from "./FaqVideos.module.scss";
import { useState, useRef } from "react";

export default function FaqVideos() {
  const [activeItem, setActiveItem] = useState(null);
  const videoRefs = useRef([]);
  const handleItemClick = (index) => {
    setActiveItem(index);

    // Зупиняємо всі відео
    videoRefs.current.forEach((videoRef, i) => {
      if (videoRef && i !== index) {
        videoRef.pause();
        videoRef.currentTime = 0;
      }
    });

    // Запускаємо відео для активного елемента
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const items = [
    {
      title: "How to add card to Google Wallet",
      video: "/images/faq/3-Google_Wallet.mp4",
    },
    {
      title: "How to add card to Apple Wallet",
      video: "/images/faq/4-Apple_Wallet.MP4",
    },
    {
      title: "How to set/change limits",
      video: "/images/faq/2-limits.mp4",
    },
    {
      title: "How to order card delivery",
      video: "/images/faq/1-Physical_card.mp4",
    },
  ];

  return (
    <section className={st.faqVideos}>
      <div className="_container">
        <div className={st.faqVideos__body}>
          <RevealWrapper delay={100} origin="bottom">
            <h2>FAQ</h2>
          </RevealWrapper>
          <RevealWrapper delay={100} origin="bottom">
            <div className={st.faqVideos__accordion}>
              {items.map((item, index) => (
                <div
                  className={st.faqVideos__accordionItem}
                  key={index}
                  onClick={() => handleItemClick(index)}
                >
                  <div
                    className={`${st.faqVideos__accordionItemTitle} ${
                      activeItem === index ? st.active : ""
                    }`}
                  >
                    <span>{item.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_527_1685)">
                        <path
                          d="M17.4217 2.45199L18.4817 3.51299L12.7047 9.29199C12.6122 9.38514 12.5021 9.45907 12.3808 9.50952C12.2596 9.55997 12.1295 9.58594 11.9982 9.58594C11.8669 9.58594 11.7369 9.55997 11.6156 9.50952C11.4944 9.45907 11.3843 9.38514 11.2917 9.29199L5.51172 3.51299L6.57172 2.45299L11.9967 7.87699L17.4217 2.45199Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_527_1685">
                          <rect
                            width="12"
                            height="24"
                            fill="white"
                            transform="translate(24) rotate(90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className={`${st.faqVideos__accordionItemContent} ${
                      activeItem === index ? st.active : ""
                    }`}
                  >
                    <div className={st.faqVideos__video}>
                      <Image
                        src="/images/activation/iphone.png"
                        alt="Card Activation"
                        width={244}
                        height={512}
                        className={st.faqVideos__videoImage}
                      />
                      <video
                        src={item.video}
                        playsInline
                        autoPlay={false}
                        muted
                        loop
                        ref={(el) => (videoRefs.current[index] = el)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
